#!/bin/bash

echo "=== Creating AuthenticatedRoutesWrapper component ==="

# Navigate to root directory
cd ../../

echo "Creating Layout components folder structure..."
mkdir -p src/components/Layout/components

echo "Creating AuthenticatedRoutesWrapper.tsx component..."
cat > src/components/Layout/components/AuthenticatedRoutesWrapper.tsx << 'EOF'
import { PropsWithChildren, useEffect } from 'react';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { RouteNamesEnum, routes } from 'routes';

export const AuthRedirectWrapper = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useGetIsLoggedIn();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentRoute = routes.find((route) => matchPath(route.path, pathname));

  const requireAuth = Boolean(currentRoute?.authenticatedRoute);

  useEffect(() => {
    if (isLoggedIn && !requireAuth) {
      navigate(RouteNamesEnum.dashboard);

      return;
    }

    if (!isLoggedIn && requireAuth) {
      navigate(RouteNamesEnum.home);
    }
  }, [isLoggedIn, currentRoute]);

  return <>{children}</>;
};
EOF

echo "✅ AuthenticatedRoutesWrapper component created successfully!"

echo "Creating components index.ts file..."
cat > src/components/Layout/components/index.ts << 'EOF'
export * from './AuthenticatedRoutesWrapper';
export * from './Footer';
export * from './Header';
EOF

echo "✅ Components index.ts file created successfully!"

echo "Updating Layout.tsx to use AuthRedirectWrapper..."
cat > src/components/Layout/Layout.tsx << 'EOF'
import { PropsWithChildren } from 'react';
import { AuthRedirectWrapper, Footer, Header } from './components';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <Header />
      <main className='flex flex-grow items-stretch justify-center p-6'>
        <AuthRedirectWrapper>{children}</AuthRedirectWrapper>
      </main>
      <Footer />
    </div>
  );
};
EOF

echo "✅ Layout.tsx updated successfully!"

echo "Done: step_06_auth_wrapper" >> progress.txt
