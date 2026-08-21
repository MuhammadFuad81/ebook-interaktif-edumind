#!/usr/bin/env python3
"""Siapkan gambar hasil generasi sebagai WebP 16:9 untuk R2."""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageOps


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--width", type=int, default=1600)
    parser.add_argument("--height", type=int, default=900)
    parser.add_argument("--quality", type=int, default=84)
    args = parser.parse_args()

    source = args.source.resolve(strict=True)
    destination = args.destination.resolve()
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = ImageOps.fit(
            image,
            (args.width, args.height),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )
        image.save(destination, "WEBP", quality=args.quality, method=6, exif=b"")

    payload = destination.read_bytes()
    print(json.dumps({
        "path": str(destination),
        "width": args.width,
        "height": args.height,
        "bytes": len(payload),
        "sha256": hashlib.sha256(payload).hexdigest(),
    }))


if __name__ == "__main__":
    main()
