#!/bin/bash

echo "=== Step 2: Creating the dashboard folder ==="

# Navigate to root directory
cd ../../

echo "Creating dashboard directory structure..."
mkdir -p src/pages/dashboard
mkdir -p src/pages/dashboard/components
mkdir -p src/pages/dashboard/widgets

echo "Creating Widget.tsx component..."
cat > src/pages/dashboard/components/Widget.tsx << 'EOF'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type WidgetType = {
  description?: string;
  reference: string;
  title: string;
  widget: () => JSX.Element;
};

export const Widget = ({
  title,
  description,
  reference,
  widget: MxWidget
}: WidgetType) => {
  return (
    <div
      className='flex flex-col flex-1 rounded-xl bg-white p-6 justify-center'
    >
      <h2 className='flex text-xl font-medium group'>
        {title}
        <a
          href={reference}
          target='_blank'
          className='hidden group-hover:block ml-2 text-blue-600'
        >
          <FontAwesomeIcon icon={faInfoCircle} size='sm' />
        </a>
      </h2>
      {description && <p className='text-gray-400 mb-6'>{description}</p>}
      <MxWidget />
    </div>
  );
};
EOF

echo "✅ Dashboard folder structure created successfully!"
echo ""
echo "Created:"
echo "  - src/pages/dashboard/ directory"
echo "  - src/pages/dashboard/components/ directory"
echo "  - src/pages/dashboard/widgets/ directory"
echo "  - src/pages/dashboard/components/Widget.tsx: Widget wrapper component"
echo ""
echo "Next: Continue with VIDEO_03 step 3" 