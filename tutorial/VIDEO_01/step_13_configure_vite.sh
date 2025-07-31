#!/bin/bash

echo "=== Step 13: Configure vite ==="

cd ../../

# Install vite dependencies
yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths

echo "✅ Vite dependencies installed successfully!"
echo "Next: Run './step_14_configure_vite_config.sh'" 