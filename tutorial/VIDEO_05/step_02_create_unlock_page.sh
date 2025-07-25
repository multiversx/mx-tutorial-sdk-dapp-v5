#!/bin/bash

echo "=== Step 2: Create the Unlock page ==="

# Navigate to root directory
cd ../../

echo "Creating Unlock page..."
cat > src/pages/Unlock.tsx << 'EOF'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNamesEnum } from 'routes';

export const Unlock = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // TODO: Replace with the actual login state
 
  useEffect(() => {
    if (isLoggedIn) {
      navigate(RouteNamesEnum.dashboard);
      return;
    }
    // open unlock panel here
  }, [isLoggedIn]);

  return null;
};
EOF

echo "Updating pages index.ts to export Unlock..."
cat >> src/pages/index.ts << 'EOF'
export * from './Unlock';
EOF

echo "Updating routes.ts with Unlock page..."
cat > src/routes/routes.ts << 'EOF'
import { Home, Dashboard, Unlock } from 'pages';

export enum RouteNamesEnum {
  home = '/',
  dashboard = '/dashboard',
  unlock = '/unlock'
}

interface BasicRouteType {
  path: string;
  title: string;
  component: () => React.ReactNode;
  authenticatedRoute?: boolean;
}

export interface RouteType extends BasicRouteType {
  children?: BasicRouteType[];
}

export const routes: RouteType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home,
    children: [
      // since unlock is made trough a sidebar, we want to keep displaying the home page in the background
      {
        path: RouteNamesEnum.unlock,
        title: 'Unlock',
        component: Unlock
      }
    ]
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  }
];
EOF

echo "✅ Unlock page created successfully!"
echo ""
echo "Created files:"
echo "  - src/pages/Unlock.tsx: Unlock page component"
echo "  - Updated src/pages/index.ts: Added Unlock export"
echo "  - Updated src/routes/routes.ts: Added Unlock route configuration with RouteType definition"
echo ""
echo "Next: Run './step_03_create_header_component.sh'" 