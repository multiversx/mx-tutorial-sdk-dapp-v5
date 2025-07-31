#!/bin/bash

echo "=== Step 10: Configure eslint and prettier ==="

cd ../../

# Install eslint and prettier
yarn add -D @eslint/js eslint prettier eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-exports

echo "✅ ESLint and Prettier dependencies installed successfully!"
echo "Next: Run './step_11_configure_prettierrc.sh'" 