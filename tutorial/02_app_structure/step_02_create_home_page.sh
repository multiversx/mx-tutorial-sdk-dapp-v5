#!/bin/bash

echo "=== Creating the pages folder and the Home page ==="

# Navigate to root directory
cd ../../

echo "Creating pages directory..."
mkdir -p src/pages

echo "Creating Home.tsx file..."
cat > src/pages/Home.tsx << 'EOF'
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex flex-1 rounded-xl bg-white p-6 sm:flex-row items-center justify-center'>
      <div className='flex flex-col-reverse sm:flex-row items-center h-full w-full'>
        <div className='flex items-start sm:items-center h-full sm:w-1/2 sm:bg-center'>
          <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl'>
            <div>
              <h1>Ping-Pong dApp</h1>
              <p className='text-gray-400'>
                An{' '}
                <a
                  href='https://www.npmjs.com/package/@multiversx/sdk-dapp'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  sdk-dapp v.5
                </a>{' '}
                example project <br className='hidden xl:block' />
                built on the{' '}
                <a
                  href='https://multiversx.com/'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  MultiversX
                </a>{' '}
                blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className='h-4/6 bg-mvx-white bg-contain bg-no-repeat w-1/2 bg-center' />
        <Outlet /> {/* This is where the child routes will be rendered */}
      </div>
    </div>
  );
};
EOF

echo "Creating pages index.ts file..."
cat > src/pages/index.ts << 'EOF'
export * from './Home';
EOF

echo "✅ Pages folder and Home component created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Home.tsx: Main home page component"
echo "  - src/pages/index.ts: Pages barrel export"
echo ""

echo "Done: step_02_create_home_page" >> progress.txt