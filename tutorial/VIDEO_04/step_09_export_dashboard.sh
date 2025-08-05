#!/bin/bash

echo "=== Exporting the Dashboard page ==="

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

echo "Done: step_09_export_dashboard" >> progress.txt