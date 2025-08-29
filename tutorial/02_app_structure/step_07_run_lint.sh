#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Run lint again to fix the errors ==="

# Navigate to root directory
cd ../../

echo "Running lint with auto-fix..."
type_and_execute "yarn lint"

echo "✅ Lint completed successfully!"
echo "Done: step_07_run_lint" >> progress.txt
