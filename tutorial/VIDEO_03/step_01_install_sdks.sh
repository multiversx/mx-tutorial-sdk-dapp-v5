#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Installing MultiversX SDK and its dependencies ==="

# Navigate to root directory
cd ../../

echo "Installing @multiversx/sdk-dapp and related packages..."
type_and_execute "yarn add @multiversx/sdk-dapp @multiversx/sdk-dapp-utils @multiversx/sdk-dapp-ui @multiversx/sdk-core bignumber.js axios moment"

echo "✅ MultiversX SDK packages installed successfully!"

echo "Done: step_01_install_sdks" >> progress.txt
