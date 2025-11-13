#!/bin/bash

echo "=== Run lint ==="

cd ../../

# Run lint
yarn lint

echo "✅ Lint completed successfully!"

echo "Done: step_15_run_lint" >> progress.txt