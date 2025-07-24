#!/bin/bash

echo "=== Step 5: Create a Layout component ==="

# Navigate to root directory
cd ../../

echo "Creating components directory..."
mkdir -p src/components

echo "Creating Layout.tsx file..."
cat > src/components/Layout.tsx << 'EOF'
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

echo "Creating components index.ts file..."
cat > src/components/index.ts << 'EOF'
export * from './Layout';
EOF

echo "✅ Layout component created successfully!"
echo ""
echo "Created files:"
echo "  - src/components/Layout.tsx: Main layout component"
echo "  - src/components/index.ts: Components barrel export"
echo ""
echo "Next: Continue with VIDEO_02 step 6" 