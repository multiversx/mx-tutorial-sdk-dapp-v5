#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Check if the project is running ==="

cd ../../

# Run the project
type_and_execute "yarn dev"

echo "✅ Development server started successfully!"

echo "Done: step_18_start_dev_server" >> progress.txt