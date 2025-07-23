#!/bin/bash

echo "=== Step 5: Configuring Vite ==="

# Change to project directory
cd ping-pong-dapp

# Install Vite plugins
yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths

# Create vite.config.ts
cat > vite.config.ts << 'EOF'
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: true,
    watch: {
      usePolling: false,
      useFsEvents: false
    },
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    basicSsl(),
    tsconfigPaths(),
    svgrPlugin(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true }
    })
  ],
  build: {
    outDir: 'build'
  },
  preview: {
    port: 3002,
    host: 'localhost',
    strictPort: true
  }
});
EOF

echo "✅ Vite plugins installed and configured successfully!"
echo "✅ vite.config.ts created"
echo "Next: Run '../step_06_configure_tsconfig.sh'" 