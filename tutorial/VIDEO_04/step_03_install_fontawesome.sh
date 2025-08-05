#!/bin/bash

echo "=== Installing FontAwesome and classnames ==="

# Navigate to root directory
cd ../../

echo "Installing FontAwesome packages..."
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome

echo "Installing classnames..."
yarn add classnames

echo "✅ FontAwesome and classnames installed successfully!"
echo "Done: step_03_install_fontawesome" >> progress.txt