#!/bin/bash

echo "=== Check if the project is running ==="

cd ../../

# Run the project
yarn dev

echo "✅ Development server started successfully!"

echo "Done: step_16_start_dev_server" >> progress.txt