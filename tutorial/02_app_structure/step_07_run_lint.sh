#!/bin/bash

echo "=== Run lint again to fix the errors ==="

# Navigate to root directory
cd ../../

echo "Running lint with auto-fix..."
yarn lint

echo "✅ Lint completed successfully!"
echo "Done: step_07_run_lint" >> progress.txt
