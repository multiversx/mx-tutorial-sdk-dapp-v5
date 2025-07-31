#!/bin/bash

echo "=== Step 4: Install Tailwind CSS ==="

cd ../../

# Install Tailwind CSS
yarn add -D tailwindcss@3.3.3 postcss autoprefixer

echo "✅ Tailwind CSS installed successfully!"
echo "Next: Run './step_05_add_tailwind_config.sh'" 