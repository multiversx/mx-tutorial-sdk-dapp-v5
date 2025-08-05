#!/bin/bash

echo "=== Configure .prettierrc ==="

cd ../../

# Create .prettierrc
cat > .prettierrc << 'EOF'
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "trailingComma": "none"
}
EOF

echo "✅ .prettierrc configured successfully!"

echo "Done: step_11_configure_prettierrc" >> progress.txt