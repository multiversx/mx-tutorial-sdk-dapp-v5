#!/bin/bash

echo "=== Step 1: Creating configs for our dApp ==="

# Navigate to root directory
cd ../../

echo "Creating config directory..."
mkdir -p src/config

echo "Creating config.devnet.ts file..."
cat > src/config/config.devnet.ts << 'EOF'
import { EnvironmentsEnum } from 'lib';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qde96pq';
export const environment = EnvironmentsEnum.devnet;
EOF

echo "Creating config index.ts file..."
cat > src/config/index.ts << 'EOF'
export * from './config.devnet';
EOF

echo "Creating lib/sdkDapp/sdkDapp.types.ts file..."
mkdir -p src/lib/sdkDapp
cat > src/lib/sdkDapp/sdkDapp.types.ts << 'EOF'
export { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
EOF

echo "Updating lib/sdkDapp/index.ts file..."
cat > src/lib/sdkDapp/index.ts << 'EOF'
export * from './sdkDapp.helpers';
export * from './sdkDapp.types';
EOF

echo "✅ Configs created successfully!"
echo ""
echo "Created files:"
echo "  - src/config/config.devnet.ts: DevNet configuration"
echo "  - src/config/index.ts: Config barrel export"
echo "  - src/lib/sdkDapp/sdkDapp.types.ts: SDK dApp types"
echo "  - Updated src/lib/sdkDapp/index.ts"
echo ""
echo "Note: Remember to update package.json scripts manually:"
echo '  "start-devnet": "yarn run copy-devnet-config & vite dev",'
echo '  "copy-devnet-config": "cp ./src/config/config.devnet.ts ./src/config/index.ts",'
echo ""
echo "Next: Continue with VIDEO_03 step 2"  
