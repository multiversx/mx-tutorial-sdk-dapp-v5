#!/bin/bash

echo "=== Creating the Account widget ==="

# Navigate to root directory
cd ../../

echo "Creating Account.tsx widget..."
cat > src/pages/Dashboard/widgets/Account.tsx << 'EOF'
import { Label, OutputContainer } from 'components';

export const Account = () => {
  return (
    <OutputContainer>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <Label>Address:</Label>
          <span data-testid='accountAddress'> ACCOUNT.ADDRESS</span>
        </p>

        <p>
          <Label>Shard: </Label> ACCOUNT.SHARD
        </p>

        <p>
          <Label>Balance: </Label>
          ACCOUNT.BALANCE
        </p>
      </div>
    </OutputContainer>
  );
};
EOF

echo "✅ Account widget created successfully!"
echo "Done: step_05_create_account_widget" >> progress.txt