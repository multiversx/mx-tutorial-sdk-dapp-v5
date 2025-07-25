#!/bin/bash

echo "=== Step 3: Installing FontAwesome and classnames ==="

# Navigate to root directory
cd ../../

echo "Installing FontAwesome packages..."
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome

echo "Installing classnames..."
yarn add classnames

echo "✅ FontAwesome and classnames installed successfully!"
echo ""
echo "Installed packages:"
echo "  - @fortawesome/fontawesome-svg-core: FontAwesome core"
echo "  - @fortawesome/free-solid-svg-icons: FontAwesome solid icons"
echo "  - @fortawesome/react-fontawesome: FontAwesome React components"
echo "  - classnames: Utility for conditionally joining classNames"
echo ""
echo "Next: Continue with VIDEO_03 step 4" 