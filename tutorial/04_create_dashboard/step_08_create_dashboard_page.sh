#!/bin/bash

echo "=== Creating the Dashboard page ==="

# Navigate to root directory
cd ../../

echo "Creating Dashboard.tsx page..."
cat > src/pages/Dashboard/Dashboard.tsx << 'EOF'
import { Widget, WidgetType } from './components';
import { Account, PingPongAbi } from './widgets';

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

echo "Done: step_08_create_dashboard_page" >> progress.txt