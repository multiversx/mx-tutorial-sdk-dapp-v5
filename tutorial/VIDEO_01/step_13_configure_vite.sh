#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 13: Configure vite ==="

cd ../../

# Install vite dependencies
type_and_execute "yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths"

echo "✅ Vite dependencies installed successfully!"
echo "Next: Run './step_14_configure_vite_config.sh'" 