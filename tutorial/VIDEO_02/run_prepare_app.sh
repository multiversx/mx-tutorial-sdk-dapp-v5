#!/bin/bash

echo "🚀 Preparing Basic App Structure with Routing"
echo "============================================="
echo ""
echo "This script will set up the basic app structure with React Router."
echo "Creating pages, routes, components and updating the main App..."
echo ""

# Step 1
echo "Running Step 1: Install react-router-dom"
./step_01_install_react_router_dom.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 1 failed. Stopping."
    exit 1
fi
echo "✅ Step 1 completed"
echo ""

# Step 2
echo "Running Step 2: Create pages folder and Home page"
./step_02_create_pages.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 2 failed. Stopping."
    exit 1
fi
echo "✅ Step 2 completed"
echo ""

# Step 3
echo "Running Step 3: Create routes folder"
./step_03_create_routes_folder.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 3 failed. Stopping."
    exit 1
fi
echo "✅ Step 3 completed"
echo ""

# Step 4
echo "Running Step 4: Create routes configuration files"
./step_04_create_routes_files.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 4 failed. Stopping."
    exit 1
fi
echo "✅ Step 4 completed"
echo ""

# Step 5
echo "Running Step 5: Create Layout component"
./step_05_create_layout_component.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 5 failed. Stopping."
    exit 1
fi
echo "✅ Step 5 completed"
echo ""

# Step 6
echo "Running Step 6: Update App.tsx file"
./step_06_update_app.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 6 failed. Stopping."
    exit 1
fi
echo "✅ Step 6 completed"
echo ""

# Step 7
echo "Running Step 7: Run lint to fix errors"
./step_07_run_lint.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 7 failed. Stopping."
    exit 1
fi
echo "✅ Step 7 completed"
echo ""

echo "🎉 App structure preparation completed successfully!"
echo ""
echo "Your React app now has:"
echo "  - React Router DOM for navigation"
echo "  - Home page component with Outlet"
echo "  - Routes configuration"
echo "  - Layout component"
echo "  - Updated App.tsx with routing"
echo "  - Clean, linted code"
echo ""
echo "You can now start the development server with: yarn dev" 