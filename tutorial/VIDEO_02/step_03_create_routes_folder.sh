#!/bin/bash

echo "=== Step 3: Create the routes folder under /src ==="

# Navigate to root directory
cd ../../

echo "Creating routes directory..."
mkdir -p src/routes

echo "✅ Routes folder created successfully!"
echo ""
echo "Created directories:"
echo "  - src/routes/: Directory for routing configuration"
echo ""
echo "Next: Run './step_04_create_routes_files.sh'"