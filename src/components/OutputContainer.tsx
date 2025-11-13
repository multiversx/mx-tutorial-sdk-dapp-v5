import { PropsWithChildren } from 'react';
import classNames from 'classnames';

export const OutputContainer = ({
  children,
  className = 'p-4'
}: PropsWithChildren & { className?: string }) => (
  <div
    className={classNames(
      'text-sm border border-gray-200 rounded overflow-auto',
      className
    )}
  >
    {children}
  </div>
);
