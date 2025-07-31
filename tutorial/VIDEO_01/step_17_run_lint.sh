#!/bin/bash

echo "=== Step 17: Run lint ==="

cd ../../

# Run lint
yarn lint

echo "✅ Lint completed successfully!"
echo "Next: Run './step_18_start_dev_server.sh'" 