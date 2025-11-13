#!/bin/bash

echo "=== Running lint ==="

# Navigate to root directory
cd ../../

echo "Running ESLint with auto-fix..."
yarn lint

echo "✅ Linting completed successfully!"

echo "Done: step_11_run_lint" >> progress.txt
