#!/bin/bash

echo "=== Step 7: Replace contents of src/index.css ==="

cd ../../

# Replace contents of src/index.css
cat > src/index.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  font-family: 'Inter', sans-serif;
}
EOF

echo "✅ src/index.css updated successfully!"

echo "Done: step_07_replace_index_css" >> progress.txt
echo "Next: Run './step_08_copy_svg_file.sh'" 