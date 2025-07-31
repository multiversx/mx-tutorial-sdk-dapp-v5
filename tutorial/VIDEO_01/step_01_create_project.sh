#!/bin/bash

echo "=== Step 1: Creating a new Vite React project with TypeScript template ==="

cd ../../

rm -rf .git

# Create a mew vite react-ts project
echo "Creating temporary project..."
npx create-vite@latest temp-project --template react-ts --yes

echo "Moving files to root directory..."
mv temp-project/* .
mv temp-project/.* . 2>/dev/null || true

rm -rf temp-project

echo "✅ Project created successfully in root directory!"
echo "Next: Run './step_02_install_dependencies.sh'" 