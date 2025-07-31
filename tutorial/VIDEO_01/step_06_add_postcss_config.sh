#!/bin/bash

echo "=== Step 6: Add postcss.config.js ==="

cd ../../

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
EOF

echo "✅ postcss.config.js created successfully!"

echo "Done: step_06_add_postcss_config" >> progress.txt
echo "Next: Run './step_07_replace_index_css.sh'" 