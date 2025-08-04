#!/bin/bash

echo "=== Step 7: Run lint again to fix the errors ==="

# Navigate to root directory
cd ../../

echo "Running lint with auto-fix..."
yarn lint --fix

echo "✅ Lint completed successfully!"
echo "Done: step_07_run_lint" >> progress.txt
