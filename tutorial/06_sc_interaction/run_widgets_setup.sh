#!/bin/bash

echo "🚀 MultiversX Widgets Setup Script"
echo "==================================="
echo ""
echo "This script will create widgets and hooks for the dApp including:"
echo "- PingPong contract ABI"
echo "- Custom hooks for smart contract interaction"
echo "- PingPong widget component"
echo "- Hooks folder structure and exports"
echo "Running all steps automatically..."
echo ""

# Define step descriptions for better output
declare -A step_descriptions=(
    [1]="Initialize SDK in main.tsx"
    [2]="Update Unlock component and Header navigation"
    [3]="Create Account widget"
    [4]="Create Transactions widget"
    [5]="Create PingPong widget with contract ABI and hooks"
)

# Loop through steps
for step in {1..5}; do
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

echo "🎉 All 5 steps completed successfully!"
echo ""
echo "All widgets and hooks have been created and configured!"
echo "PingPong smart contract integration is ready!"
echo "You can now interact with the ping-pong contract through the UI!"
