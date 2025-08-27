#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Install Tailwind CSS ==="

cd ../../

# Install Tailwind CSS
type_and_execute "yarn add tailwindcss"

type_and_execute "yarn add -D @tailwindcss/vite @tailwindcss/postcss @tailwindcss/cli"

echo "✅ Tailwind CSS installed successfully!"

echo "Done: step_03_install_tailwind" >> progress.txt