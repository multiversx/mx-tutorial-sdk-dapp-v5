#!/bin/bash

echo "=== Configure vite ==="

cd ../../

# Install vite dependencies
yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths

echo "✅ Vite dependencies installed successfully!"

echo "Done: step_11_configure_vite" >> progress.txt