#!/bin/bash

echo "=== Step 6: Creating the PingPongAbi widget ==="

# Navigate to root directory
cd ../../

echo "Creating PingPongAbi.tsx widget..."
cat > src/pages/Dashboard/widgets/PingPongAbi.tsx << 'EOF'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, OutputContainer } from 'components';

export const PingPongAbi = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Ping
          </Button>

          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowDown} className='mr-1' />
            Pong
          </Button>
        </div>
      </div>

      <OutputContainer>PING-PONG ABI OUTPUT</OutputContainer>
    </div>
  );
};
EOF

echo "✅ PingPongAbi widget created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Dashboard/widgets/PingPongAbi.tsx: Ping-Pong interaction widget"
echo ""
echo "Next: Run './step_07_create_widgets_index.sh'" 