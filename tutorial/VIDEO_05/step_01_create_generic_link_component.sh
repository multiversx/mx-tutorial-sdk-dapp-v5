#!/bin/bash

echo "=== Step 1: Create a generic link component ==="

# Navigate to root directory
cd ../../

echo "Creating MxLink component..."
cat > src/components/MxLink.tsx << 'EOF'
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface MxLinkPropsType extends PropsWithChildren {
  to: string;
  className?: string;
}

export const MxLink = ({
  to,
  children,
  className = 'inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
}: MxLinkPropsType) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
EOF

echo "Updating components index.ts to export MxLink..."
cat >> src/components/index.ts << 'EOF'
export * from './MxLink';
EOF

echo "✅ MxLink component created successfully!"
echo ""
echo "Created files:"
echo "  - src/components/MxLink.tsx: Generic link component"
echo "  - Updated src/components/index.ts: Added MxLink export"
echo ""
echo "Next: Run './step_02_create_unlock_page.sh'"  
