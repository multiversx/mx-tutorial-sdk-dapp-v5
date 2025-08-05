#!/bin/bash
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Installing FontAwesome and classnames ==="

# Navigate to root directory
cd ../../

echo "Installing FontAwesome packages..."
type_and_execute "yarn add classnames @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome"

echo "✅ FontAwesome and classnames installed successfully!"
echo "Done: step_03_install_fontawesome" >> progress.txt