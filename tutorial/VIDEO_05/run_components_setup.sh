#!/bin/bash

echo "🚀 MultiversX Components Setup Script"
echo "======================================"
echo ""
echo "This script will create UI components for the dApp including:"
echo "- Generic MxLink component"
echo "- Unlock page"
echo "- Header and Footer components"
echo "- Transactions widget"
echo "- Updated Layout and Dashboard pages"
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Create generic link component"
    [2]="Create Unlock page"
    [3]="Create Header component"
    [4]="Create Footer component"
    [5]="Update Layout component"
    [6]="Create Transactions widget"
    [7]="Update Dashboard page"
    [8]="Run lint to fix any errors"
)

# Loop through steps
for step in {1..8}; do
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

echo "🎉 All 8 steps completed successfully!"
echo ""
echo "All UI components have been created and configured!"
echo "Code has been linted and formatted."
echo "You can now start building your MultiversX dApp with a complete UI structure!" 