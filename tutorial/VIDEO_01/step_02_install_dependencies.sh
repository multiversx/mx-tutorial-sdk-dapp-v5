#!/bin/bash

echo "=== Step 2: Installing dependencies ==="

# Change to root directory
cd ../../

# list current directory
pwd

# Install dependencies
yarn

echo "✅ Dependencies installed successfully!"

# Initialize git repository
git init
git add .
git commit -m "01. Initial commit"

echo "Next: Run './step_03_install_tailwind.sh'" 