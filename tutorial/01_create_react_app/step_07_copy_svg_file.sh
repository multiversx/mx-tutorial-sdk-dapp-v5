#!/bin/bash

echo "=== Copy the multiversx-white.svg file to the public folder ==="

cd ../../

# Copy the multiversx-white.svg file to the public folder
cp tutorial/01_create_react_app/multiversx-white.svg public/multiversx-white.svg

echo "✅ multiversx-white.svg copied to public folder successfully!"

echo "Done: step_07_copy_svg_file" >> progress.txt