#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Configure vite ==="

cd ../../

# Install vite dependencies
type_and_execute "yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths"

echo "✅ Vite dependencies installed successfully!"

echo "Done: step_13_configure_vite" >> progress.txt