#!/bin/bash

echo "🚀 React + Tailwind + MultiversX dApp Setup Script"
echo "=================================================="
echo ""
echo "This script will run all 8 steps to set up your project in the root directory."
echo "Running all steps automatically..."
echo ""

# Step 1
echo "Running Step 1: Create new Vite React project"
./step_01_create_project.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 1 failed. Stopping."
    exit 1
fi
echo "✅ Step 1 completed"
echo ""

# Step 2
echo "Running Step 2: Install dependencies"
./step_02_install_dependencies.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 2 failed. Stopping."
    exit 1
fi
echo "✅ Step 2 completed"
echo ""

# Step 3
echo "Running Step 3: Install Tailwind CSS"
./step_03_install_tailwind.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 3 failed. Stopping."
    exit 1
fi
echo "✅ Step 3 completed"
echo ""

# Step 4
echo "Running Step 4: Configure ESLint and Prettier"
./step_04_configure_eslint_prettier.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 4 failed. Stopping."
    exit 1
fi
echo "✅ Step 4 completed"
echo ""

# Step 5
echo "Running Step 5: Configure Vite"
./step_05_configure_vite.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 5 failed. Stopping."
    exit 1
fi
echo "✅ Step 5 completed"
echo ""

# Step 6
echo "Running Step 6: Configure TypeScript"
./step_06_configure_tsconfig.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 6 failed. Stopping."
    exit 1
fi
echo "✅ Step 6 completed"
echo ""

# Step 7
echo "Running Step 7: Add lint command and run it"
./step_07_add_lint_command.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 7 failed. Stopping."
    exit 1
fi
echo "✅ Step 7 completed"
echo ""

# # Step 8
# echo "🎉 Setup completed successfully!"
# echo ""
# echo "Starting development server..."
# echo "Note: This will start the dev server and keep running."
# echo "Press Ctrl+C to stop the server when you're done."
# ./step_08_start_dev_server.sh 