#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Copy the multiversx-white.svg file to the public folder ==="

cd ../../

# Copy the multiversx-white.svg file to the public folder
type_and_execute "cp tutorial/VIDEO_01/multiversx-white.svg public/multiversx-white.svg"

echo "✅ multiversx-white.svg copied to public folder successfully!"

echo "Done: step_07_copy_svg_file" >> progress.txt