#!/bin/bash

echo "=== Step 8: Exporting the Dashboard page ==="

# Navigate to root directory
cd ../../

echo "Creating Dashboard index.ts file..."
cat > src/pages/Dashboard/index.ts << 'EOF'
export * from './Dashboard';
EOF

echo "Updating pages index.ts file..."
cat >> src/pages/index.ts << 'EOF'
export * from './Dashboard';
EOF

echo "✅ Dashboard exports created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Dashboard/index.ts: Dashboard barrel export"
echo "  - Updated src/pages/index.ts"
echo ""
echo "Next: Continue with VIDEO_03 step 9" 