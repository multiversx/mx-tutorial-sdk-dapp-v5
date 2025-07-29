#!/bin/bash

echo "=== Step 3: Installing Tailwind CSS and creating config files ==="

# Change to root directory
cd ../../

# Install Tailwind CSS and dependencies
yarn add -D tailwindcss@3.3.3 postcss autoprefixer

# Create tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      // eslint-disable-next-line quotes
      'mvx-white': "url('../multiversx-white.svg')"
    }
  },
  plugins: []
};
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
EOF

# Replace contents of src/index.css (the file that gets imported by main.tsx)
cat > src/index.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# Remove any mistakenly created root index.css file
rm -f index.css

# Copy the multiversx-white.svg file to the public folder
cp tutorial/VIDEO_01/multiversx-white.svg public/multiversx-white.svg

echo "✅ Tailwind CSS installed and configured successfully!"
echo "✅ tailwind.config.js created with backgroundImage config"
echo "✅ postcss.config.js created"
echo "✅ src/index.css updated with Inter font and Tailwind directives"
echo "✅ multiversx-white.svg copied to public folder"

# list current directory
pwd

# Commit changes
git add .
git commit -m "02. Add tailwind css"

# create video for Tailwind CSS Configuration
# videogit $(git log --grep="^01" --pretty=format:"%h" -n1) $(git log --grep="^02" --pretty=format:"%h" -n 1) -w 180 -r 24 -f tailwind.config.js --show-line-numbers --title "tailwind.config.js" --output-filename 01 -o /Users/tudor/Work/test/playwright-mcp/videos/VIDEO_01

echo "Next: Run './step_04_configure_eslint_prettier.sh'" 