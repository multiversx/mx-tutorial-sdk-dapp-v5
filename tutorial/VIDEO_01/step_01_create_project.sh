#!/bin/bash

echo "=== Step 1: Creating a new Vite React project with TypeScript template ==="

# Create the project
npx create-vite@latest ping-pong-dapp --template react-ts --yes

echo "✅ Project 'ping-pong-dapp' created successfully!"
echo "Next: Run './step_02_install_dependencies.sh'" 