#!/bin/bash

echo "=== Step 5: Creating the Account widget ==="

# Navigate to root directory
cd ../../

echo "Creating Account.tsx widget..."
cat > src/pages/dashboard/widgets/Account.tsx << 'EOF'
import { Label, OutputContainer } from 'components';

export const Account = () => {
  return (
    <div className='text-sm border border-gray-200 rounded overflow-auto p-4'>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <label className='text-gray-500'>Address:</label>
          <span data-testid='accountAddress'> ACCOUNT.ADDRESS</span>
        </p>

        <p>
          <label className='text-gray-500'>Shard: </label> ACCOUNT.SHARD
        </p>

        <p>
          <label className='text-gray-500'>Balance: </label>

          ACCOUNT.BALANCE
        </p>
      </div>
    </div>
  );
};
EOF

echo "✅ Account widget created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/dashboard/widgets/Account.tsx: Account information widget"
echo ""
echo "Next: Continue with VIDEO_03 step 6" 