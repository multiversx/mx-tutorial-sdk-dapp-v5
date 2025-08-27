#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Configure eslint and prettier ==="

cd ../../

# Install eslint and prettier
yarn add -D @eslint/js eslint prettier eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-exports

echo "✅ ESLint and Prettier dependencies installed successfully!"

echo "Done: step_08_configure_eslint_prettier" >> progress.txt