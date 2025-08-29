#!/bin/bash

echo "🚀 MultiversX SDK Setup Script"
echo "============================="
echo ""
echo "This script will install MultiversX SDK and its dependencies."
echo "Running SDK installation..."
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Install MultiversX SDK packages"
)

# Loop through steps
for step in {1..1}; do
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

echo "🎉 All 1 steps completed successfully!"
echo ""
echo "You can now start building your MultiversX dApp!" 