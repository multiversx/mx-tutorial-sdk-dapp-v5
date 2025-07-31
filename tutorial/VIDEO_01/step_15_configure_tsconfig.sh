#!/bin/bash

echo "=== Step 15: Configure tsconfig.json ==="

cd ../../

# Remove existing tsconfig files if they exist
rm -f tsconfig.app.json tsconfig.node.json

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src"
  },
  "include": ["src"]
}
EOF

echo "✅ tsconfig.json configured successfully!"

echo "Done: step_15_configure_tsconfig" >> progress.txt
echo "Next: Run './step_16_add_formatting_scripts.sh'" 