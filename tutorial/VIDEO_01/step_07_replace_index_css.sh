#!/bin/bash

echo "=== Step 7: Replace contents of src/index.css ==="

cd ../../

# Replace contents of src/index.css
cat > src/index.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

echo "✅ src/index.css updated successfully!"
echo "Next: Run './step_08_copy_svg_file.sh'" 