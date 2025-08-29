#!/bin/bash

echo "🚀 MultiversX dApp Complete Setup Script"
echo "======================================="
echo ""
echo "This script will:"
echo "1. Clean the project (keeping only .git, .auto-type, tutorial, .gitignore)"
echo "2. Run all video setup scripts in sequence"
echo ""

# Navigate to root directory
cd ../

echo "📋 Current project structure:"
ls -la
echo ""

read -p "⚠️  WARNING: This will delete all files except .git, .auto-type, tutorial, and .gitignore. Continue? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Operation cancelled."
    exit 1
fi

echo ""
echo "🧹 Cleaning project..."

# List of items to preserve
PRESERVE_LIST=(".git" ".auto-type" "tutorial" ".gitignore")

# Get all items in current directory
for item in *; do
    # Check if item should be preserved
    should_preserve=false
    for preserve_item in "${PRESERVE_LIST[@]}"; do
        if [[ "$item" == "$preserve_item" ]]; then
            should_preserve=true
            break
        fi
    done
    
    # Remove item if it's not in preserve list
    if [[ "$should_preserve" == false ]]; then
        echo "  Removing: $item"
        rm -rf "$item"
    else
        echo "  Preserving: $item"
    fi
done

# Also remove hidden files except the preserved ones
for item in .*; do
    # Skip . and .. directories
    if [[ "$item" == "." || "$item" == ".." ]]; then
        continue
    fi
    
    # Check if item should be preserved
    should_preserve=false
    for preserve_item in "${PRESERVE_LIST[@]}"; do
        if [[ "$item" == "$preserve_item" ]]; then
            should_preserve=true
            break
        fi
    done
    
    # Remove item if it's not in preserve list
    if [[ "$should_preserve" == false ]]; then
        echo "  Removing: $item"
        rm -rf "$item"
    fi
done

echo "✅ Project cleaned successfully!"
echo ""

echo "📋 Cleaned project structure:"
ls -la
echo ""

echo "🎬 Starting video setup sequence..."
echo ""

# Define video setup information
declare -A video_setups=(
    [1]="Project Setup|01_create_react_app|run_project_setup.sh"
    [2]="Prepare App|02_app_structure|run_prepare_app.sh"
    [3]="SDK Setup|03_install_sdk_dapp|run_sdk_setup.sh"
    [4]="Create Dashboard|04_create_dashboard|run_create_dashboard.sh"
    [5]="Components Setup|05_create_layout|run_components_setup.sh"
    [6]="Widgets Setup|06_sc_interaction|run_widgets_setup.sh"
)

# Loop through all videos
for video_num in {1..6}; do
    IFS='|' read -r video_name folder_name script_name <<< "${video_setups[$video_num]}"
    
    echo "===================="
    echo "🎬 VIDEO $video_num: $video_name"
    echo "===================="
    
    cd "tutorial/$folder_name"
    
    if [[ -f "$script_name" ]]; then
        echo "Running $folder_name setup..."
        ./"$script_name"
        if [ $? -ne 0 ]; then
            echo "❌ $folder_name setup failed. Stopping."
            exit 1
        fi
        echo "✅ $folder_name completed successfully!"
    else
        echo "⚠️  $folder_name run script not found, skipping..."
    fi
    
    echo ""
    
    # Navigate back to root for next video
    cd ../../
done

echo "🎉 COMPLETE SETUP FINISHED! 🎉"
echo ""
echo "================================"
echo "✅ All video setups completed successfully!"
echo ""
echo "📁 Final project structure:"
ls -la
echo ""
echo "🚀 Your MultiversX dApp is ready!"
echo ""
echo "To start development:"
echo "  yarn start-devnet  # Start with DevNet configuration"
echo "  yarn dev           # Start with default configuration"
echo ""
echo "Happy coding! 🚀" 