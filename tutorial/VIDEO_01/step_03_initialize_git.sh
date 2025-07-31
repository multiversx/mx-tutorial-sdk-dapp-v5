#!/bin/bash

echo "=== Step 3: Initialize git repository & create first commit ==="

cd ../../

# Initialize git repository and create first commit
git init
git add .
git commit -m "01. Initial commit"

echo "✅ Git repository initialized and first commit created!"
echo "Next: Run './step_04_install_tailwind.sh'" 