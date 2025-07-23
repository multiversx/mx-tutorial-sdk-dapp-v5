#!/bin/bash

echo "=== Step 3: Installing Tailwind CSS and creating config files ==="

# Change to project directory
cd ping-pong-dapp

# Install Tailwind CSS and dependencies
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/postcss

# Create tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
EOF

echo "✅ Tailwind CSS installed and configured successfully!"
echo "✅ tailwind.config.js created"
echo "✅ postcss.config.js created"
echo "Next: Run '../step_04_configure_eslint_prettier.sh'" 