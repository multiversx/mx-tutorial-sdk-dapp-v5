#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Running lint ==="

# Navigate to root directory
cd ../../

echo "Running ESLint with auto-fix..."
type_and_execute "yarn lint --fix"

echo "✅ Linting completed successfully!"

echo "Done: step_11_run_lint" >> progress.txt
