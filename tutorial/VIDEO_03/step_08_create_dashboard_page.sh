#!/bin/bash

echo "=== Step 8: Creating the Dashboard page ==="

# Navigate to root directory
cd ../../

echo "Creating Dashboard.tsx page..."
cat > src/pages/dashboard/Dashboard.tsx << 'EOF'
import { contractAddress } from 'config';
import { Widget, WidgetType } from './components';
import {
  Account,
  PingPongAbi,
} from './widgets';

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

echo "✅ Dashboard page created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/dashboard/Dashboard.tsx: Main dashboard page with widgets"
echo ""
echo "Next: Continue with VIDEO_03 step 9" 