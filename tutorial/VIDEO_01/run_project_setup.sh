#!/bin/bash

echo "🚀 React + Tailwind + MultiversX dApp Setup Script"
echo "=================================================="
echo ""
echo "This script will run all 16 steps to set up your project in the root directory."
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Create new Vite React project"
    [2]="Install dependencies"
    [3]="Install Tailwind CSS"
    [4]="Add tailwind.config.js"
    [5]="Add postcss.config.js"
    [6]="Replace contents of src/index.css"
    [7]="Copy the multiversx-white.svg file to the public folder"
    [8]="Configure eslint and prettier"
    [9]="Configure .prettierrc"
    [10]="Configure eslint.config.js"
    [11]="Configure vite"
    [12]="Configure vite.config.ts"
    [13]="Configure tsconfig.json"
    [14]="Add formatting scripts"
    [15]="Run lint"
    [16]="Check if the project is running"
)

# Loop through steps
for step in {1..16}; do
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

echo "🎉 All 16 steps completed successfully!"
echo "Your React + Tailwind + MultiversX dApp is now set up and running!"
echo "The development server should be running on http://localhost:3000" 