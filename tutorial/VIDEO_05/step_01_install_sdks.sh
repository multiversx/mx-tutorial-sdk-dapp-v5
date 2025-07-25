#!/bin/bash

echo "=== Step 1: Installing MultiversX SDK and its dependencies ==="

# Navigate to root directory
cd ../../

echo "Installing @multiversx/sdk-dapp and related packages..."
yarn add @multiversx/sdk-dapp @multiversx/sdk-core @multiversx/sdk-dapp-utils @multiversx/sdk-dapp-ui bignumber.js axios

echo "✅ MultiversX SDK packages installed successfully!"
echo ""
echo "Installed packages:"
echo "  - @multiversx/sdk-dapp: Main SDK for dApp development"
echo "  - @multiversx/sdk-core: Core MultiversX functionality"
echo "  - @multiversx/sdk-dapp-utils: Utility functions for dApps"
echo "  - @multiversx/sdk-dapp-ui: UI components for dApps"
echo "  - bignumber.js: Big number arithmetic library"
echo "  - axios: HTTP client for API requests"
echo ""
echo "Next: Run './step_02_create_lib_structure.sh'"  
