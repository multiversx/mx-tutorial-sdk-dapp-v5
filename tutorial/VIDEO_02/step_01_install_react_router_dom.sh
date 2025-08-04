#!/bin/bash

echo "=== Step 1: Installing react-router-dom ==="

# Navigate to root directory
cd ../../

echo "Installing react-router-dom..."
yarn add react-router-dom

echo "Done: step_02_install_dependencies" >> progress.txt
echo "Next: Run './step_02_create_home_page.sh'"
