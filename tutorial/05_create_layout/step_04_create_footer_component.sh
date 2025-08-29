#!/bin/bash

echo "=== Step 4: Create the Footer component ==="

# Navigate to root directory
cd ../../

echo "Creating Footer component..."
cat > src/components/Layout/components/Footer.tsx << 'EOF'
export const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-prose pb-6 pl-6 pr-6 text-center text-gray-400'>
      <div className='flex flex-col items-center text sm text-gray-400'>
        <a
          target='_blank'
          className='flex items-center text-sm hover:underline'
          href='https://github.com/multiversx/mx-tutorial-sdk-dapp-v5'
        >
          GitHub Repository
        </a>
      </div>
    </footer>
  );
};
EOF

echo "Creating Layout components index.ts..."
cat > src/components/Layout/components/index.ts << 'EOF'
export * from './Header';
export * from './Footer';
EOF

echo "✅ Footer component created successfully!"
echo ""
echo "Created files:"
echo "  - src/components/Layout/components/Footer.tsx: Footer component"
echo "  - src/components/Layout/components/index.ts: Layout components barrel export"
echo ""
echo "Next: Run './step_05_update_layout_component.sh'" 