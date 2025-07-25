#!/bin/bash

echo "=== Step 6: Creating widgets index file ==="

# Navigate to root directory
cd ../../

echo "Creating widgets index.ts file..."
cat > src/pages/Dashboard/widgets/index.ts << 'EOF'
export * from './Account';
export * from './PingPongAbi';
EOF

echo "✅ Widgets index file created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Dashboard/widgets/index.ts: Widgets barrel export"
echo ""
echo "Next: Continue with VIDEO_03 step 8" 