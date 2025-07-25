#!/bin/bash

echo "=== Step 7: Creating widgets index file ==="

# Navigate to root directory
cd ../../

echo "Creating widgets index.ts file..."
cat > src/pages/dashboard/widgets/index.ts << 'EOF'
export * from './Account';
export * from './PingPongAbi';
EOF

echo "✅ Widgets index file created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/dashboard/widgets/index.ts: Widgets barrel export"
echo ""
echo "Next: Continue with VIDEO_03 step 8" 