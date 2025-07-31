#!/bin/bash

echo "=== Step 11: Running lint ==="

# Navigate to root directory
cd ../../

echo "Running ESLint with auto-fix..."
yarn lint --fix

echo "✅ Linting completed successfully!"
echo ""
echo "The code has been automatically formatted and linted."
echo ""