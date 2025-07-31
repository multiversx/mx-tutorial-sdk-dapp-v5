#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 17: Run lint ==="

cd ../../

# Run lint
type_and_execute "yarn lint"

echo "✅ Lint completed successfully!"

echo "Done: step_17_run_lint" >> progress.txt
echo "Next: Run './step_18_start_dev_server.sh'" 