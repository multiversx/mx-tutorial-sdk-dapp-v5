#!/bin/bash

echo "=== Add tailwind.config.js ==="

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
import App from './App.tsx';
import './index.css';
import './tailwind.css'; // Import Tailwind CSS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
EOF

echo "✅ tailwind.config.js created successfully!"

echo "Done: step_04_add_tailwind_config" >> progress.txt