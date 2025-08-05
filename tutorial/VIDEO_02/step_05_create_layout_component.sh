#!/bin/bash

echo "=== Create a Layout component ==="

# Navigate to root directory
cd ../../

echo "Creating components directory..."
mkdir -p src/components

echo "Creating Layout directory..."
mkdir -p src/components/Layout

echo "Creating Layout.tsx file..."
cat > src/components/Layout/Layout.tsx << 'EOF'
import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <main className='flex flex-grow items-stretch justify-center p-6'>
        {children}
      </main>
    </div>
  );
};
EOF

echo "Creating Layout index.ts file..."
cat > src/components/Layout/index.ts << 'EOF'
export * from './Layout';
EOF

echo "Creating components index.ts file..."
cat > src/components/index.ts << 'EOF'
export * from './Layout';
EOF

echo "✅ Layout component created successfully!"

echo "Done: step_05_create_layout_component" >> progress.txt