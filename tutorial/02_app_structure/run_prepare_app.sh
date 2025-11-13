#!/bin/bash

echo "🚀 Preparing Basic App Structure with Routing"
echo "============================================="
echo ""
echo "This script will set up the basic app structure with React Router."
echo "Creating pages, routes, components and updating the main App..."
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Install react-router-dom"
    [2]="Create pages folder and Home page"
    [3]="Create routes folder"
    [4]="Create routes configuration files"
    [5]="Create Layout component"
    [6]="Update App.tsx file"
    [7]="Run lint to fix errors"
)

# Loop through steps
for step in {1..7}; do
    step_file="step_$(printf "%02d" $step)_*.sh"
    
    # Find the exact step file
    step_file_path=$(find . -name "$step_file" -type f | head -n 1)
    
    if [ -z "$step_file_path" ]; then
        echo "❌ Step $step file not found: $step_file"
        exit 1
    fi
    
    echo "Running Step $step: ${step_descriptions[$step]}"
    echo "Executing: $step_file_path"
    
    # Execute the step
    bash "$step_file_path"
    
    if [ $? -ne 0 ]; then
        echo "❌ Step $step failed. Stopping."
        exit 1
    fi
    
    echo "✅ Step $step completed"
    echo ""
done

echo "🎉 All 7 steps completed successfully!"
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