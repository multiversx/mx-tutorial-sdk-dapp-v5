#!/bin/bash

echo "🚀 MultiversX SDK Setup Script"
echo "============================="
echo ""
echo "This script will install MultiversX SDK and its dependencies."
echo "Running SDK installation..."
echo ""

# Step 1
echo "Running Step 1: Install MultiversX SDK packages"
./step_01_install_sdks.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 1 failed. Stopping."
    exit 1
fi
echo "✅ Step 1 completed"
echo ""

# Step 2
echo "Running Step 2: Create lib folder structure"
./step_02_create_lib_structure.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 2 failed. Stopping."
    exit 1
fi
echo "✅ Step 2 completed"
echo ""

# Future steps can be added here as needed
# Step 3
# echo "Running Step 3: [Next step]"
# ./step_03_[next_step].sh
# if [ $? -ne 0 ]; then
#     echo "❌ Step 3 failed. Stopping."
#     exit 1
# fi
# echo "✅ Step 3 completed"
# echo ""

echo "🎉 SDK setup completed successfully!"
echo ""
echo "You can now start building your MultiversX dApp!" 