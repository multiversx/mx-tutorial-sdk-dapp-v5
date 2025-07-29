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
# echo ""

# echo "🎬 Starting video setup sequence..."
# echo ""

# # VIDEO 1: Project Setup
# echo "===================="
# echo "🎬 VIDEO 1: Project Setup"
# echo "===================="
# cd tutorial/VIDEO_01
# if [[ -f "run_project_setup.sh" ]]; then
#     echo "Running VIDEO_01 setup..."
#     ./run_project_setup.sh
#     if [ $? -ne 0 ]; then
#         echo "❌ VIDEO_01 setup failed. Stopping."
#         exit 1
#     fi
#     echo "✅ VIDEO_01 completed successfully!"
# else
#     echo "⚠️  VIDEO_01 run script not found, skipping..."
# fi
# echo ""

# # Navigate back to root for next video
# cd ../../

# # VIDEO 2: Prepare App
# echo "===================="
# echo "🎬 VIDEO 2: Prepare App"
# echo "===================="
# cd tutorial/VIDEO_02
# if [[ -f "run_prepare_app.sh" ]]; then
#     echo "Running VIDEO_02 setup..."
#     ./run_prepare_app.sh
#     if [ $? -ne 0 ]; then
#         echo "❌ VIDEO_02 setup failed. Stopping."
#         exit 1
#     fi
#     echo "✅ VIDEO_02 completed successfully!"
# else
#     echo "⚠️  VIDEO_02 run script not found, skipping..."
# fi
# echo ""

# # Navigate back to root for next video
# cd ../../

# # VIDEO 3: SDK Setup
# echo "===================="
# echo "🎬 VIDEO 3: SDK Setup"
# echo "===================="
# cd tutorial/VIDEO_03
# if [[ -f "run_sdk_setup.sh" ]]; then
#     echo "Running VIDEO_03 setup..."
#     ./run_sdk_setup.sh
#     if [ $? -ne 0 ]; then
#         echo "❌ VIDEO_03 setup failed. Stopping."
#         exit 1
#     fi
#     echo "✅ VIDEO_03 completed successfully!"
# else
#     echo "⚠️  VIDEO_03 run script not found, skipping..."
# fi
# echo ""

# # Navigate back to root for next video
# cd ../../

# # VIDEO 4: Create Dashboard
# echo "===================="
# echo "🎬 VIDEO 4: Create Dashboard"
# echo "===================="
# cd tutorial/VIDEO_04
# if [[ -f "run_create_dashboard.sh" ]]; then
#     echo "Running VIDEO_04 setup..."
#     ./run_create_dashboard.sh
#     if [ $? -ne 0 ]; then
#         echo "❌ VIDEO_04 setup failed. Stopping."
#         exit 1
#     fi
#     echo "✅ VIDEO_04 completed successfully!"
# else
#     echo "⚠️  VIDEO_04 run script not found, skipping..."
# fi
# echo ""

# # Navigate back to root for next video
# cd ../../

# # VIDEO 5: Components Setup
# echo "===================="
# echo "🎬 VIDEO 5: Components Setup"
# echo "===================="
# cd tutorial/VIDEO_05
# if [[ -f "run_components_setup.sh" ]]; then
#     echo "Running VIDEO_05 setup..."
#     ./run_components_setup.sh
#     if [ $? -ne 0 ]; then
#         echo "❌ VIDEO_05 setup failed. Stopping."
#         exit 1
#     fi
#     echo "✅ VIDEO_05 completed successfully!"
# else
#     echo "⚠️  VIDEO_05 run script not found, skipping..."
# fi
# echo ""

# # Navigate back to root
# cd ../../

# echo "🎉 COMPLETE SETUP FINISHED! 🎉"
# echo ""
# echo "================================"
# echo "✅ All video setups completed successfully!"
# echo ""
# echo "📁 Final project structure:"
# ls -la
# echo ""
# echo "🚀 Your MultiversX dApp is ready!"
# echo ""
# echo "To start development:"
# echo "  yarn start-devnet  # Start with DevNet configuration"
# echo "  yarn dev           # Start with default configuration"
# echo ""
# echo "Happy coding! 🚀" 