#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 8: Copy the multiversx-white.svg file to the public folder ==="

cd ../../

# Copy the multiversx-white.svg file to the public folder
type_and_execute "cp tutorial/VIDEO_01/multiversx-white.svg public/multiversx-white.svg"

echo "✅ multiversx-white.svg copied to public folder successfully!"

echo "Done: step_08_copy_svg_file" >> progress.txt
echo "Next: Run './step_09_commit_project.sh'" 