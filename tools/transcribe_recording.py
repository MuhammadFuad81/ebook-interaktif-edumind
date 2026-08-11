"""Transcribe a long Indonesian recording with timestamped outputs."""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path

from faster_whisper import BatchedInferencePipeline, WhisperModel


def stamp(seconds: float, srt: bool = False) -> str:
    milliseconds = round(seconds * 1000)
    hours, milliseconds = divmod(milliseconds, 3_600_000)
    minutes, milliseconds = divmod(milliseconds, 60_000)
    secs, milliseconds = divmod(milliseconds, 1000)
    separator = "," if srt else ":"
    return f"{hours:02d}:{minutes:02d}:{secs:02d}{separator}{milliseconds:03d}"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("audio", type=Path)
    parser.add_argument("output_stem", type=Path)
    parser.add_argument("--model", default="turbo")
    parser.add_argument("--download-root", type=Path, required=True)
    parser.add_argument("--batch-size", type=int, default=8)
    parser.add_argument("--cpu-threads", type=int, default=max(4, os.cpu_count() or 4))
    args = parser.parse_args()

    args.output_stem.parent.mkdir(parents=True, exist_ok=True)
    args.download_root.mkdir(parents=True, exist_ok=True)

    model = WhisperModel(
        args.model,
        device="cpu",
        compute_type="int8",
        cpu_threads=args.cpu_threads,
        download_root=str(args.download_root),
    )
    pipeline = BatchedInferencePipeline(model=model)
    segments, info = pipeline.transcribe(
        str(args.audio),
        language="id",
        batch_size=args.batch_size,
        beam_size=5,
        vad_filter=True,
        vad_parameters={"min_silence_duration_ms": 500},
        word_timestamps=False,
        condition_on_previous_text=True,
    )

    rows: list[dict[str, object]] = []
    for i, segment in enumerate(segments, start=1):
        text = segment.text.strip()
        if not text:
            continue
        row = {"index": i, "start": segment.start, "end": segment.end, "text": text}
        rows.append(row)
        print(f"[{stamp(segment.start)}] {text}", flush=True)

    metadata = {
        "source": str(args.audio),
        "model": args.model,
        "language": info.language,
        "language_probability": info.language_probability,
        "duration_seconds": info.duration,
        "duration_after_vad_seconds": info.duration_after_vad,
        "segments": rows,
    }
    args.output_stem.with_suffix(".json").write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    md = [
        "# Transkrip Lengkap — Formula One Stop Schooling",
        "",
        f"Sumber: `{args.audio.name}`  ",
        f"Durasi: {stamp(info.duration)}  ",
        "Bahasa: Indonesia",
        "",
        "> Catatan: transkrip dibuat otomatis dari rekaman dan dirapikan lebih lanjut pada tahap editorial.",
        "",
    ]
    md.extend(f"**[{stamp(float(row['start']))}]** {row['text']}" for row in rows)
    args.output_stem.with_suffix(".md").write_text("\n\n".join(md) + "\n", encoding="utf-8")

    srt_lines: list[str] = []
    for i, row in enumerate(rows, start=1):
        srt_lines.extend(
            [
                str(i),
                f"{stamp(float(row['start']), True)} --> {stamp(float(row['end']), True)}",
                str(row["text"]),
                "",
            ]
        )
    args.output_stem.with_suffix(".srt").write_text("\n".join(srt_lines), encoding="utf-8")


if __name__ == "__main__":
    main()
