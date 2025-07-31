#!/bin/bash

echo "=== Step 8: Copy the multiversx-white.svg file to the public folder ==="

cd ../../

# Copy the multiversx-white.svg file to the public folder
cp tutorial/VIDEO_01/multiversx-white.svg public/multiversx-white.svg

echo "✅ multiversx-white.svg copied to public folder successfully!"
echo "Next: Run './step_09_commit_project.sh'" 