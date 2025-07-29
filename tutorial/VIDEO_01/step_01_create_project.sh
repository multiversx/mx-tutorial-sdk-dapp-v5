#!/bin/bash

echo "=== Step 1: Creating a new Vite React project with TypeScript template ==="

# Navigate to root directory
cd ../../

# remove any existing repository
rm -rf .git

# Create the project in current directory by creating a temp project and moving files
echo "Creating temporary project..."
npx create-vite@latest temp-project --template react-ts --yes

echo "Moving files to root directory..."
# Move all files from temp-project to current directory
mv temp-project/* .
mv temp-project/.* . 2>/dev/null || true

# Remove the temporary directory
rm -rf temp-project

echo "✅ Project created successfully in root directory!"
echo "Next: Run './step_02_install_dependencies.sh'" 