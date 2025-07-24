#!/bin/bash

echo "=== Step 2: Installing dependencies ==="

# Change to root directory
cd ../../

# Install dependencies
yarn

echo "✅ Dependencies installed successfully!"
echo "Next: Run './step_03_install_tailwind.sh'" 