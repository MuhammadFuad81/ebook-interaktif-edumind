"""Convert a Zoom VTT transcript into numbered project artifacts."""

from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path


TIMING = re.compile(
    r"(?P<start>\d{2}:\d{2}:\d{2}\.\d{3})\s+-->\s+(?P<end>\d{2}:\d{2}:\d{2}\.\d{3})"
)


def seconds(stamp: str) -> float:
    hours, minutes, rest = stamp.split(":")
    return int(hours) * 3600 + int(minutes) * 60 + float(rest)


def display(seconds_value: float) -> str:
    total = int(seconds_value)
    return f"{total // 3600:02d}:{(total % 3600) // 60:02d}:{total % 60:02d}"


def srt_stamp(stamp: str) -> str:
    return stamp.replace(".", ",")


def parse_vtt(path: Path) -> list[dict[str, object]]:
    blocks = re.split(r"\r?\n\s*\r?\n", path.read_text(encoding="utf-8-sig").strip())
    cues: list[dict[str, object]] = []
    for block in blocks:
        lines = [line.strip() for line in block.splitlines() if line.strip()]
        timing_index = next((index for index, line in enumerate(lines) if TIMING.fullmatch(line)), None)
        if timing_index is None:
            continue
        match = TIMING.fullmatch(lines[timing_index])
        if not match:
            continue
        text = " ".join(lines[timing_index + 1 :]).strip()
        speaker = ""
        spoken = text
        speaker_match = re.match(r"^([^:]{1,90}):\s*(.*)$", text)
        if speaker_match:
            speaker = speaker_match.group(1).strip()
            spoken = speaker_match.group(2).strip()
        cues.append(
            {
                "index": len(cues) + 1,
                "start": seconds(match.group("start")),
                "end": seconds(match.group("end")),
                "start_stamp": match.group("start"),
                "end_stamp": match.group("end"),
                "speaker": speaker,
                "text": spoken,
            }
        )
    return cues


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output_prefix", type=Path)
    parser.add_argument("--title", required=True)
    parser.add_argument("--date", required=True)
    parser.add_argument(
        "--section",
        action="append",
        default=[],
        metavar="SECONDS=HEADING",
        help="Add a Markdown section heading at the given elapsed second; may be repeated.",
    )
    args = parser.parse_args()

    cues = parse_vtt(args.source)
    if not cues:
        raise SystemExit("No cues were found in the VTT file.")

    prefix = args.output_prefix
    prefix.parent.mkdir(parents=True, exist_ok=True)
    duration = float(cues[-1]["end"])
    shutil.copyfile(args.source, prefix.with_suffix(".vtt"))

    srt_lines: list[str] = []
    for cue in cues:
        speaker = f"{cue['speaker']}: " if cue["speaker"] else ""
        srt_lines.extend(
            [
                str(cue["index"]),
                f"{srt_stamp(str(cue['start_stamp']))} --> {srt_stamp(str(cue['end_stamp']))}",
                f"{speaker}{cue['text']}",
                "",
            ]
        )
    prefix.with_suffix(".srt").write_text("\n".join(srt_lines), encoding="utf-8")

    payload = {
        "source": str(args.source),
        "title": args.title,
        "date": args.date,
        "duration_seconds": duration,
        "segments": [
            {
                "index": cue["index"],
                "start": cue["start"],
                "end": cue["end"],
                "speaker": cue["speaker"],
                "text": cue["text"],
            }
            for cue in cues
        ],
    }
    prefix.with_suffix(".json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    sections: list[tuple[float, str]] = []
    for raw_section in args.section:
        try:
            raw_seconds, heading = raw_section.split("=", 1)
            sections.append((float(raw_seconds), heading.strip()))
        except ValueError as exc:
            raise SystemExit(f"Invalid --section value: {raw_section!r}") from exc
    sections = sorted(sections or [(0, "Transkrip")], key=lambda item: item[0])
    md_lines = [
        f"# Transkrip Lengkap — {args.title}",
        "",
        "**Penyelenggara:** Edumind Academy  ",
        f"**Tanggal sesi:** {args.date}  ",
        f"**Durasi rekaman:** {display(duration)}",
        "",
        "> Transkrip berasal dari rekaman Zoom dan disunting secara mekanis untuk format serta keterbacaan. Pengulangan lisan dan kemungkinan salah dengar pada transkripsi otomatis tetap dipertahankan agar isi sumber tidak diubah secara editorial.",
        "",
    ]
    next_section = 0
    for cue in cues:
        start = float(cue["start"])
        while next_section < len(sections) and start >= sections[next_section][0]:
            md_lines.extend([f"## {sections[next_section][1]}", ""])
            next_section += 1
        speaker = f"**{cue['speaker']}:** " if cue["speaker"] else ""
        md_lines.extend([f"**[{display(start)}]** {speaker}{cue['text']}", ""])
    prefix.with_suffix(".md").write_text("\n".join(md_lines).rstrip() + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
