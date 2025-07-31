#!/bin/bash

echo "🚀 React + Tailwind + MultiversX dApp Setup Script"
echo "=================================================="
echo ""
echo "This script will run all 18 steps to set up your project in the root directory."
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Create new Vite React project"
    [2]="Install dependencies"
    [3]="Initialize git repository & create first commit"
    [4]="Install Tailwind CSS"
    [5]="Add tailwind.config.js"
    [6]="Add postcss.config.js"
    [7]="Replace contents of src/index.css"
    [8]="Copy the multiversx-white.svg file to the public folder"
    [9]="Commit the project"
    [10]="Configure eslint and prettier"
    [11]="Configure .prettierrc"
    [12]="Configure eslint.config.js"
    [13]="Configure vite"
    [14]="Configure vite.config.ts"
    [15]="Configure tsconfig.json"
    [16]="Add formatting scripts"
    [17]="Run lint"
    [18]="Check if the project is running"
)

# Loop through steps
for step in {1..18}; do
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

echo "🎉 All 18 steps completed successfully!"
echo "Your React + Tailwind + MultiversX dApp is now set up and running!"
echo "The development server should be running on http://localhost:3000" 