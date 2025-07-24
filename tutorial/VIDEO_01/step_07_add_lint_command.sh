#!/bin/bash

echo "=== Step 7: Adding lint command to package.json and running it ==="

# Change to root directory
cd ../../

# Add lint command to package.json
# Use node to modify the package.json file
node -e "
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts.lint = 'eslint --ext js,ts,tsx src --fix';
packageJson.scripts.format = 'prettier --write . --ignore-path .gitignore --ignore-pattern "public/**" --ignore-pattern "node_modules/**" --ignore-pattern "yarn.lock"';
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
"

echo "✅ Lint command added to package.json"

# Run lint
echo "Running lint..."
yarn lint
yarn format

echo "✅ Lint completed successfully!"
echo "Next: Run './step_08_start_dev_server.sh'" 