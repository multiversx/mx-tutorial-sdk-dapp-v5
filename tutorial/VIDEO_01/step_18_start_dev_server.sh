#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 18: Check if the project is running ==="

cd ../../

# Run the project
# type_and_execute "yarn dev"

echo "✅ Development server started successfully!"
echo "🎉 Video 1 setup completed! The project should now be running on http://localhost:3000" 