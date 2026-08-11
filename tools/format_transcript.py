"""Create a lightly edited, sectioned Markdown transcript from Whisper JSON."""

from __future__ import annotations

import json
import re
from pathlib import Path


SOURCE = Path("transkrip-formula-one-stop-schooling.json")
TARGET = Path("transkrip-formula-one-stop-schooling.md")

SECTIONS = [
    (0, "Pembukaan Moderator"),
    (195, "Pemaparan Awal: Tujuan dan Alasan One Stop Schooling"),
    (2_280, "Diskusi Awal dan Pendalaman Bilingual"),
    (4_020, "Pemaparan Utama: Desain Pendidikan Berkelanjutan"),
    (6_600, "Tanya Jawab dan Klinik Kasus"),
    (8_190, "Kesimpulan dan Penutupan"),
]

REPLACEMENTS = {
    "Edumain": "Edumind",
    "Edomain": "Edumind",
    "Edomind": "Edumind",
    "Duman": "Edumind",
    "eklusif": "eksklusif",
    "sarang asesor": "seorang asesor",
    "one-strip schooling": "One Stop Schooling",
    "one-stop skilling": "One Stop Schooling",
    "one sub schooling": "One Stop Schooling",
    "one-stop schooling": "One Stop Schooling",
    "one stop schooling": "One Stop Schooling",
    "OASM": "OSS",
    "PBDB": "PPDB",
    "BPDB": "PPDB",
    "billing wall": "bilingual",
    "Bailing Wall": "bilingual",
    "Bellingwell": "bilingual",
    "Bellingwall": "bilingual",
    "piling wal": "bilingual",
    "Belling Wall": "bilingual",
    "CFR": "CEFR",
    "Cambridge Assement Inggris": "Cambridge Assessment English",
    "Alazar": "Al-Azhar",
    "Bungkulu": "Bengkulu",
    "Bukasi": "Bekasi",
    "jenajah": "jenazah",
    "umpura": "umrah",
    "zatat": "zakat",
    "fikir menikah": "fikih menikah",
    "kejahateraannya": "kesejahteraannya",
    "GAPT MARKET": "captive market",
    "sovernir": "suvenir",
    "inline place": "in line, please",
}


def stamp(seconds: float) -> str:
    total = int(seconds)
    return f"{total // 3600:02d}:{(total % 3600) // 60:02d}:{total % 60:02d}"


def clean(text: str) -> str:
    for old, new in REPLACEMENTS.items():
        text = re.sub(re.escape(old), new, text, flags=re.IGNORECASE)
    text = re.sub(r"\b(\d+)\s+(?:jus|just|cus)\b", r"\1 juz", text, flags=re.IGNORECASE)
    text = re.sub(r"\bahlak\b", "akhlak", text, flags=re.IGNORECASE)
    text = re.sub(r"One Stop Schoolinging\b", "One Stop Schooling", text, flags=re.IGNORECASE)
    text = re.sub(r"\blembah kita\b", "lembaga kita", text, flags=re.IGNORECASE)
    text = re.sub(r"\b(?:YASAN|hiasan) yang sama\b", "yayasan yang sama", text, flags=re.IGNORECASE)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def main() -> None:
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    segments = data["segments"]
    lines = [
        "# Transkrip Lengkap — Formula One Stop Schooling",
        "",
        "**Narasumber utama:** Dr. Supangat, M.A.  ",
        "**Penyelenggara:** Edumind Academy  ",
        "**Tanggal sesi:** 5 Agustus 2026  ",
        f"**Durasi rekaman:** {stamp(float(data['duration_seconds']))}",
        "",
        "> Transkrip dibuat otomatis dari rekaman lengkap dan disunting ringan untuk ejaan istilah, nama program, serta keterbacaan. Pengulangan lisan tetap dipertahankan; bagian yang kurang jelas ditulis sedekat mungkin dengan hasil audio.",
        "",
    ]

    next_section = 0
    for segment in segments:
        start = float(segment["start"])
        while next_section < len(SECTIONS) and start >= SECTIONS[next_section][0]:
            lines.extend([f"## {SECTIONS[next_section][1]}", ""])
            next_section += 1
        lines.extend([f"**[{stamp(start)}]** {clean(str(segment['text']))}", ""])

    TARGET.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
