#!/bin/bash

echo "=== Step 6: Create the Transactions widget ==="

# Navigate to root directory
cd ../../

echo "Creating Transactions widget..."
cat > src/pages/Dashboard/widgets/Transactions.tsx << 'EOF'
import { OutputContainer } from 'components';

export const Transactions = () => {
  const isLoading = false; // TODO: Replace with the actual loading state
  const transactions = []; // TODO: Replace with the actual transactions

  if (!isLoading && transactions.length === 0) {
    return (
      <OutputContainer>
        <p className='text-gray-400'>No transactions found</p>
      </OutputContainer>
    );
  }

  return (
    <div className='flex flex-col'>
      <OutputContainer isLoading={isLoading} className='p-0'>
        <div className='w-full h-full overflow-x-auto bg-white shadow rounded-lg'>
          {/* TODO: Add transactions table here */}
        </div>
      </OutputContainer>
    </div>
  );
};
EOF

echo "Updating Dashboard widgets index.ts to export Transactions..."
cat >> src/pages/Dashboard/widgets/index.ts << 'EOF'
export * from './Transactions';
EOF

echo "✅ Transactions widget created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Dashboard/widgets/Transactions.tsx: Transactions widget component"
echo "  - Updated src/pages/Dashboard/widgets/index.ts: Added Transactions export"
echo ""
echo "Note: The useGetTransactions hook needs to be created separately"
echo ""
echo "Next: Run './step_07_update_dashboard_page.sh'" 