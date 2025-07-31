#!/bin/bash

echo "=== Step 9: Commit the project ==="

cd ../../

# Create a new commit
git add .
git commit -m "02. Add tailwind css"

echo "✅ Project committed successfully!"
echo "Next: Run './step_10_configure_eslint_prettier.sh'" 