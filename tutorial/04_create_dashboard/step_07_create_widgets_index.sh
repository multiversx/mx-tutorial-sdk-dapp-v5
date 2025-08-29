#!/bin/bash

echo "=== Creating widgets index file ==="

# Navigate to root directory
cd ../../

echo "Creating widgets index.ts file..."
cat > src/pages/Dashboard/widgets/index.ts << 'EOF'
export * from './Account';
export * from './PingPongAbi';
EOF

echo "✅ Widgets index file created successfully!"

echo "Done: step_07_create_widgets_index" >> progress.txt