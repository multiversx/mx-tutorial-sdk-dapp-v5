#!/bin/bash

echo "=== Creating helper components ==="

# Navigate to root directory
cd ../../

echo "Creating Label.tsx component..."
cat > src/components/Label.tsx << 'EOF'
import { PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return <label className='text-gray-500'>{children}</label>;
};
EOF

echo "Creating OutputContainer.tsx component..."
cat > src/components/OutputContainer.tsx << 'EOF'
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export const OutputContainer = ({
  children,
  className = 'p-4'
}: PropsWithChildren) => (
  <div
    className={classNames(
      'text-sm border border-gray-200 rounded overflow-auto',
      className
    )}
  >
    {children}
  </div>
);
EOF

echo "Creating Button.tsx component..."
cat > src/components/Button.tsx << 'EOF'
import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonType extends PropsWithChildren {
  onClick?: (e: MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  id,
  className = 'inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed',
  ...otherProps
}: ButtonType) => {
  return (
    <button
      id={id}
      {...otherProps}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};
EOF

echo "Updating components index.ts file..."
cat >> src/components/index.ts << 'EOF'
export * from './Label';
export * from './OutputContainer';
export * from './Button';
EOF

echo "✅ Helper components created successfully!"
echo "Done: step_04_create_helper_components" >> progress.txt