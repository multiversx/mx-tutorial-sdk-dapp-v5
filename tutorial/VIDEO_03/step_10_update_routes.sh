#!/bin/bash

echo "=== Step 10: Updating routes ==="

# Navigate to root directory
cd ../../

echo "Updating routes.ts file..."
cat > src/routes/routes.ts << 'EOF'
import { Home, Dashboard } from 'pages';
import { RouteType } from 'types';

export enum RouteNamesEnum {
  home = '/',
  dashboard = '/dashboard'
}

interface BasicRouteType {
  path: string;
  title: string;
  component: () => React.ReactNode;
  authenticatedRoute?: boolean;
}

interface RouteType extends BasicRouteType {
  children?: BasicRouteType[];
}

export const routes: RouteType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home,
    children: [
      // Unlock page
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

echo "✅ Routes updated successfully!"
echo ""
echo "Updated files:"
echo "  - src/routes/routes.ts: Added Dashboard route"
echo ""
echo "Next: Continue with VIDEO_03 step 11" 