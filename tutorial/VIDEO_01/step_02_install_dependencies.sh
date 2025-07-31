#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 2: Installing dependencies ==="

cd ../../

# Install dependencies
type_and_execute "yarn"

echo "✅ Dependencies installed successfully!"

echo "Done: step_02_install_dependencies" >> progress.txt
echo "Next: step_03_initialize_git.sh" 