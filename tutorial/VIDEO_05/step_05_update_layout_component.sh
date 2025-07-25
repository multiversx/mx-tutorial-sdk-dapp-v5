#!/bin/bash

echo "=== Step 5: Update the Layout component to use Header and Footer ==="

# Navigate to root directory
cd ../../

echo "Updating Layout component to include Header and Footer..."
cat > src/components/Layout/Layout.tsx << 'EOF'
import { PropsWithChildren } from 'react';
import { Footer, Header } from './components';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <Header />
      <main className='flex flex-grow items-stretch justify-center p-6'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
EOF

echo "✅ Layout component updated successfully!"
echo ""
echo "Updated files:"
echo "  - src/components/Layout/Layout.tsx: Now includes Header and Footer components"
echo ""
echo "Next: Run './step_06_create_transactions_widget.sh'" 