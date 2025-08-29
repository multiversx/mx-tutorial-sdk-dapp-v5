#!/bin/bash

echo "=== Creating configs for our dApp ==="

# Navigate to root directory
cd ../../

echo "Creating config directory..."
mkdir -p src/config

echo "Creating config.devnet.ts file..."
cat > src/config/config.devnet.ts << 'EOF'
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qde96pq';
export const environment = EnvironmentsEnum.devnet;
EOF

echo "Creating config index.ts file..."
cat > src/config/index.ts << 'EOF'
export * from './config.devnet';
EOF

echo "Updating package.json scripts..."
node -e "
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts['start-devnet'] = 'yarn run copy-devnet-config & vite dev';
packageJson.scripts['copy-devnet-config'] = 'cp ./src/config/config.devnet.ts ./src/config/index.ts';
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
"

echo "✅ Configs created successfully!"
echo "Done: step_01_create_configs" >> progress.txt
