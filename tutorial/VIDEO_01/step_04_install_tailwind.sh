#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 4: Install Tailwind CSS ==="

cd ../../

# Install Tailwind CSS
type_and_execute "yarn add -D tailwindcss @tailwindcss/vite @tailwindcss/postcss @tailwindcss/cli"

echo "✅ Tailwind CSS installed successfully!"

echo "Done: step_04_install_tailwind" >> progress.txt
echo "Next: Run './step_05_add_tailwind_config.sh'" 