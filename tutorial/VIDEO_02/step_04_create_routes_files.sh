#!/bin/bash

echo "=== Create the index.ts file under /src/routes ==="

# Navigate to root directory
cd ../../

echo "Creating routes.ts file..."
cat > src/routes/routes.ts << 'EOF'
import { Home } from 'pages';

export enum RouteNamesEnum {
  home = '/',
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
  }
];
EOF

echo "Creating routes index.ts file..."
cat > src/routes/index.ts << 'EOF'
export * from './routes';
EOF

echo "✅ Routes configuration files created successfully!"
echo ""
echo "Created files:"
echo "  - src/routes/routes.ts: Routes configuration"
echo "  - src/routes/index.ts: Routes barrel export"
echo ""

echo "Done: step_04_create_routes_files" >> progress.txt