#!/bin/bash

echo "=== Installing dependencies ==="

cd ../../

# Install dependencies
yarn

echo "✅ Dependencies installed successfully!"

echo "Done: step_02_install_dependencies" >> progress.txt