import os
import json
from collections import defaultdict

# Path to the metadata directory
metadata_dir = "./"

# Group files by country
file_summary = defaultdict(list)

for filename in os.listdir(metadata_dir):
    if filename.endswith(".json"):
        country = filename.split("_")[0]
        file_summary[country].append(filename)

# Print summary of file counts and check contents
for country, files in file_summary.items():
    print(f"{country}: {len(files)} files")
    for file in files:
        with open(os.path.join(metadata_dir, file), 'r') as f:
            data = json.load(f)
            print(f"  {file}: {len(data)} images")
