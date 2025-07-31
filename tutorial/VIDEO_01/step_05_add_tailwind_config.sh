#!/bin/bash

echo "=== Step 5: Add tailwind.config.js ==="

cd ../../

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

echo "✅ tailwind.config.js created successfully!"

echo "Done: step_05_add_tailwind_config" >> progress.txt
echo "Next: Run './step_06_add_postcss_config.sh'" 