#!/bin/bash

echo "=== Step 16: Add formatting scripts ==="

cd ../../

# Add lint and format scripts to package.json
if [ -f "package.json" ]; then
  node -e "
    const fs = require('fs');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }
    
    packageJson.scripts.lint = 'eslint --ext js,ts,tsx src --fix && prettier --write . --ignore-path .gitignore --ignore-pattern "public/*" --ignore-pattern "node_modules/**" --ignore-pattern "yarn.lock"';
    
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  "
  echo "✅ Formatting scripts added to package.json successfully!"
else
  echo "❌ package.json not found!"
  exit 1
fi

echo "Done: step_16_add_formatting_scripts" >> progress.txt
echo "Next: Run './step_17_run_lint.sh'" 