#!/bin/bash

echo "=== Step 5: Add tailwind.config.js ==="

cd ../../

# Create tailwind.config.js
cat > src/tailwind.css << 'EOF'
@import 'tailwindcss';

@theme {
    --background-image-mvx-white: url('../multiversx-white.svg');
}
EOF

# Replace contents of src/main.tsx
cat > src/main.tsx << 'EOF'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './tailwind.css'; // Import Tailwind CSS
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
EOF

echo "✅ tailwind.config.js created successfully!"

echo "Done: step_05_add_tailwind_config" >> progress.txt
echo "Next: Run './step_06_add_postcss_config.sh'" 