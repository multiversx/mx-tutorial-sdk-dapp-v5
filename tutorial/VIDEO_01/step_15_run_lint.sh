#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Run lint ==="

cd ../../

# Run lint
type_and_execute "yarn lint"

echo "✅ Lint completed successfully!"

echo "Done: step_15_run_lint" >> progress.txt