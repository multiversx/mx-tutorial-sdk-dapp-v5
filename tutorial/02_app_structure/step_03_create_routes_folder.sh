#!/bin/bash

echo "=== Create the routes folder under /src ==="

# Navigate to root directory
cd ../../

echo "Creating routes directory..."
mkdir -p src/routes

echo "✅ Routes folder created successfully!"

echo "Done: step_03_create_routes_folder" >> progress.txt