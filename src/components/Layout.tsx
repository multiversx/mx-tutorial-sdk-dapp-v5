import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <main className='flex flex-grow items-stretch justify-center p-6'>
        {children}
      </main>
    </div>
  );
};
