#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Installing dependencies ==="

cd ../../

# Install dependencies
type_and_execute "yarn"

echo "✅ Dependencies installed successfully!"

echo "Done: step_02_install_dependencies" >> progress.txt