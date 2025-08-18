#!/bin/bash

ASSET_DIR="../src/assets"
OUTPUT_DIR="../src/assets/webp"

mkdir -p "$OUTPUT_DIR"

shopt -s nullglob

for ext in jpg jpeg png; do
  for file in "$ASSET_DIR"/*.$ext; do
    filename=$(basename "$file")
    name="${filename%.*}"
    cwebp -q 80 "$file" -o "$OUTPUT_DIR/$name.webp"
    echo "Converted $file -> $OUTPUT_DIR/$name.webp"
  done
done

echo "Conversion complete. Compressed .webp files are in $OUTPUT_DIR"