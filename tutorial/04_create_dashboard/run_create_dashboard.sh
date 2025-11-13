#!/bin/bash

echo "🚀 MultiversX Dashboard Creation Script"
echo "======================================"
echo ""
echo "This script will create the dashboard page with account, ping-pong and transaction history widgets."
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Create configs for our dApp"
    [2]="Create the dashboard folder"
    [3]="Install FontAwesome and classnames"
    [4]="Create helper components"
    [5]="Create the Account widget"
    [6]="Create the PingPongAbi widget"
    [7]="Create widgets index file"
    [8]="Create the Dashboard page"
    [9]="Export the Dashboard page"
    [10]="Update routes"
    [11]="Run lint to fix any errors"
)

# Loop through steps
for step in {1..11}; do
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

echo "🎉 All 11 steps completed successfully!"
echo ""
echo "All dashboard components have been created and configured!"
echo "You can now view your dashboard with account and ping-pong widgets!"
echo ""
echo "To start the development server with DevNet config, run:"
echo "  yarn start-devnet" 