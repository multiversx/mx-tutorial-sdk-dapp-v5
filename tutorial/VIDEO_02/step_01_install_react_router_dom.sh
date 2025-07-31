#!/bin/bash

echo "=== Step 1: Installing react-router-dom ==="

# Navigate to root directory
cd ../../

echo "Installing react-router-dom..."
yarn add react-router-dom

echo "✅ MultiversX SDK packages installed successfully!"
echo ""
echo "Installed packages:"
echo "  - react-router-dom: Routing for React"
echo ""
echo "Next: Run './step_02_create_home_page.sh'"
