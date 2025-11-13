#!/bin/bash

echo "=== Step 1: Creating a new Vite React project with TypeScript template ==="

cd ../../

# Create a mew vite react-ts project
echo "Creating project..."
npx create-vite@latest ping-pong-tutorial --template react-ts --yes

echo "Moving files to root directory..."
mv ping-pong-tutorial/* .
mv ping-pong-tutorial/.* . 2>/dev/null || true

rm -rf ping-pong-tutorial

echo "✅ Project created successfully in root directory!"
echo "Done: step_01_create_project" >> progress.txt
echo "Next: step_02_install_dependencies.sh" 