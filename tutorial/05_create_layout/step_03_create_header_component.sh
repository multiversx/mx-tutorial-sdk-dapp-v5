#!/bin/bash

echo "=== Step 3: Create the Header component ==="

# Navigate to root directory
cd ../../

echo "Creating Layout components directory..."
mkdir -p src/components/Layout/components

echo "Creating Header component..."
cat > src/components/Layout/components/Header.tsx << 'EOF'
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { environment } from 'config';
import { RouteNamesEnum } from 'routes';

export const Header = () => {
  const isLoggedIn = false; // TODO: Replace with the actual login state
  const navigate = useNavigate();

  const handleLogout = async () => {
    // TODO: Implement logout
    navigate(RouteNamesEnum.home);
  };

  return (
    <header className='flex flex-row align-center justify-between pl-6 pr-6 pt-6 ml-auto'>
      <nav className='h-full w-full text-sm sm:relative sm:left-auto sm:top-auto sm:flex sm:w-auto sm:flex-row sm:justify-end sm:bg-transparent'>
        <div className='flex justify-end container mx-auto items-center gap-2'>
          <div className='flex gap-1 items-center'>
            <div className='w-2 h-2 rounded-full bg-green-500' />
            <p className='text-gray-600'>{environment}</p>
          </div>

          {isLoggedIn ? (
            <>
              <Button
                onClick={handleLogout}
                className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 text-gray-600 hover:bg-slate-100 mx-0'
              >
                Close
              </Button>
            </>
          ) : (
             <Button
              onClick={() => {
                navigate(RouteNamesEnum.dashboard); // TODO: replace with navigate(RouteNamesEnum.unlock);
              }}
            >
              Connect
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};
EOF

echo "✅ Header component created successfully!"
echo ""
echo "Created files:"
echo "  - src/components/Layout/components/Header.tsx: Header component"
echo ""
echo "Next: Run './step_04_create_footer_component.sh'" 