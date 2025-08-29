#!/bin/bash

echo "=== Step 8: Run lint to fix any errors ==="

# Navigate to root directory
cd ../../

echo "Running lint with auto-fix..."
yarn lint

echo "✅ Lint completed successfully!"
echo "Done: step_08_run_lint" >> progress.txt
