#!/bin/bash

# Base directory containing the folders
BASE_DIR="/home/gkm/Documents/GKM/kibokoCollection/metadatgen/metadata"

# Change to the base directory
cd "$BASE_DIR" || exit

# Loop through each folder and compress it
for folder in */; do
  # Remove trailing slash from folder name
  folder_name=${folder%/}
  # Compress the folder into a .zip file
  zip -r "${folder_name}.zip" "$folder_name"
done

echo "All folders have been compressed into zip files."
