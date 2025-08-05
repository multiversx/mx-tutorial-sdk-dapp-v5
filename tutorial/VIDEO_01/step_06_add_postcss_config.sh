#!/bin/bash

echo "=== Add postcss.config.js ==="

cd ../../

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
EOF

echo "✅ postcss.config.js created successfully!"

echo "Done: step_06_add_postcss_config" >> progress.txt