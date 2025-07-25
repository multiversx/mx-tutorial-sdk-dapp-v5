#!/bin/bash

echo "=== Step 2: Creating lib folder structure for SDK re-exports ==="

# Navigate to root directory
cd ../../

echo "Creating src/lib directory structure..."
mkdir -p src/lib/sdk-dapp

echo "Creating src/lib/sdk-dapp/sdk-dapp.helpers.ts..."
cat > src/lib/sdk-dapp/sdk-dapp.helpers.ts << 'EOF'
export { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
EOF

echo "Creating src/lib/sdk-dapp/index.ts..."
cat > src/lib/sdk-dapp/index.ts << 'EOF'
export * from './sdk-dapp.helpers';
EOF

echo "Creating src/lib/index.ts..."
cat > src/lib/index.ts << 'EOF'
export * from './sdk-dapp';
EOF

echo "✅ Lib folder structure created successfully!"
echo ""
echo "Created structure:"
echo "  - src/lib/"
echo "  - src/lib/sdk-dapp/"
echo "  - src/lib/sdk-dapp/sdk-dapp.helpers.ts"
echo "  - src/lib/sdk-dapp/index.ts"
echo "  - src/lib/index.ts" 