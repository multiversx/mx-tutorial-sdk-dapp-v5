#!/bin/bash

echo "=== Install Tailwind CSS ==="

cd ../../

# Install Tailwind CSS
yarn add tailwindcss

yarn add -D @tailwindcss/vite @tailwindcss/postcss @tailwindcss/cli autoprefixer

echo "✅ Tailwind CSS installed successfully!"

echo "Done: step_03_install_tailwind" >> progress.txt