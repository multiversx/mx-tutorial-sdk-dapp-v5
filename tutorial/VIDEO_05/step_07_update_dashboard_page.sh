#!/bin/bash

echo "=== Step 7: Update the Dashboard page to use the Transactions widget ==="

# Navigate to root directory
cd ../../

echo "Updating Dashboard page to include Transactions widget..."
cat > src/pages/Dashboard/Dashboard.tsx << 'EOF'
import { Widget, WidgetType } from './components';
import { Account, PingPongAbi, Transactions } from './widgets';

const WIDGETS: WidgetType[] = [
  {
    title: 'Account',
    widget: Account,
    description: 'Connected account details',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Ping & Pong (ABI)',
    widget: PingPongAbi,
    description:
      'Smart Contract interactions using the ABI generated transactions',
    reference:
      'https://docs.multiversx.com/sdk-and-tools/sdk-js/sdk-js-cookbook/#using-interaction-when-the-abi-is-available'
  },
  {
    title: 'Transactions',
    widget: Transactions,
    description: 'Transactions history',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#transactions'
  }
];

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 max-w-3xl w-full'>
      {WIDGETS.map((element) => (
        <Widget key={element.title} {...element} />
      ))}
    </div>
  );
};
EOF

echo "✅ Dashboard page updated successfully!"
echo ""
echo "Updated files:"
echo "  - src/pages/Dashboard/Dashboard.tsx: Now includes Transactions widget"
echo ""
echo "Next: Run './step_08_run_lint.sh'" 