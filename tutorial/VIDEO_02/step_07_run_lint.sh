#!/bin/bash

echo "=== Step 7: Run lint again to fix the errors ==="

# Navigate to root directory
cd ../../

echo "Running lint with auto-fix..."
type_and_execute lint --fix
type_and_execute "git add ."
type_and_execute "git commit -m \"04. Linting and formatting\""

echo "✅ Lint completed successfully!"
echo "Done: step_07_run_lint" >> progress.txt
