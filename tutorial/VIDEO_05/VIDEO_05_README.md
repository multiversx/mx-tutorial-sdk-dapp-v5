# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for adding final components to the dApp.

Video 5:
Adding Unlock page, link, header and footer components, and a transactions widget

### Step 1: Create a generic link component

Create the `src/components/MxLink.tsx` file.

```bash
touch src/components/MxLink.tsx
```

Add the following content to the `src/components/MxLink.tsx` file:

```tsx
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
```

Re-export the MxLink component in the `src/components/index.ts` file by appending the following content to the file:

```ts
export * from './MxLink';
```

### Step 2: Create the Unlock page

Create the `src/pages/Unlock.tsx` file.

```bash
touch src/pages/Unlock.tsx
```

Add the following content to the `src/pages/Unlock.tsx` file:

```tsx
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
```

Re-export the Unlock page in the `src/pages/index.ts` file by appending the following content to the file:

```ts
export * from './Unlock';
```

Add the Unlock page to the routes.ts file by replacing the content of the file with the following:

```ts
import { Home, Dashboard, Unlock } from 'pages';
import { RouteType } from 'types';

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

interface RouteType extends BasicRouteType {
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
```

### Step 3: Create the Header component

Create the Header component in the `src/components/Layout/components/Header.tsx` file.

```bash
mkdir -p src/components/Layout/components
touch src/components/Layout/components/Header.tsx
```

Add the following content to the `src/components/Layout/components/Header.tsx` file:

```tsx
import { useNavigate } from 'react-router-dom';
import { Button, MxLink } from 'components';
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
    <header className='flex flex-row align-center justify-between pl-6 pr-6 pt-6'>
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
```

### Step 4: Create the Footer component

Create the Footer component in the `src/components/Layout/components/Footer.tsx` file.

```bash
touch src/components/Layout/components/Footer.tsx
```

Add the following content to the `src/components/Layout/components/Footer.tsx` file:

```tsx
export const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-prose pb-6 pl-6 pr-6 text-center text-gray-400'>
      <div className='flex flex-col items-center text sm text-gray-400'>
        <a
          target='_blank'
          className='flex items-center text-sm hover:underline'
          href='https://github.com/multiversx/mx-tutorial-sdk-dapp-v5'
        >
          GitHub Repository
        </a>
      </div>
    </footer>
  );
};
```

Create the `src/components/Layout/components/index.ts` file.

```bash
touch src/components/Layout/components/index.ts
```

Add the following content to the `src/components/Layout/components/index.ts` file:

```ts
export * from './Header';
export * from './Footer';
```

### Step 5: Update the Layout component to use the Header and Footer components

Update the `src/components/Layout/Layout.tsx` file by replacing the content of the file with the following:

```tsx
import { PropsWithChildren } from 'react';
import { Footer, Header } from './components';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <Header />
      <main className='flex flex-grow items-stretch justify-center p-6'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
```

### Step 6: Create the Transactions widget

Create the `src/pages/Dashboard/widgets/Transactions.tsx` file.

```bash
touch src/pages/Dashboard/widgets/Transactions.tsx
```

Add the following content to the `src/pages/Dashboard/widgets/Transactions.tsx` file:

```tsx
import { OutputContainer } from 'components';

export const Transactions = () => {
  const transactions = []; // TODO: Replace with the actual transactions

  if (transactions.length === 0) {
    return (
      <OutputContainer>
        <p className='text-gray-400'>No transactions found</p>
      </OutputContainer>
    );
  }

  return (
    <div className='flex flex-col'>
      <OutputContainer className='p-0'>
        <div className='w-full h-full overflow-x-auto bg-white shadow rounded-lg'>
          {/* TODO: Add transactions table here */}
        </div>
      </OutputContainer>
    </div>
  );
};
```

Export the Transactions component in the `src/pages/Dashboard/widgets/index.ts` file by appending the following content to the file:

```ts
export * from './Transactions';
```

### Step 7: Update the Dashboard page to use the Transactions widget

Update the `src/pages/Dashboard/Dashboard.tsx` file by replacing the content of the file with the following:

```tsx
import { Widget, WidgetType } from './components';
import { Account, PingPongAbi, Transactions } from './widgets';

const WIDGETS: WidgetType[] = [
  {
    title: 'Account',
    widget: Account,
    description: 'Connected account details',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Ping & Pong (ABI)',
    widget: PingPongAbi,
    description:
      'Smart Contract interactions using the ABI generated transactions',
    reference:
      'https://docs.multiversx.com/sdk-and-tools/sdk-js/sdk-js-cookbook/#using-interaction-when-the-abi-is-available'
  },
  {
    title: 'Transactions',
    widget: Transactions,
    description: 'Transactions history',
    reference:
      'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#transactions'
  }
];

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 max-w-3xl w-full'>
      {WIDGETS.map((element) => (
        <Widget key={element.title} {...element} />
      ))}
    </div>
  );
};
```

### Step 8: Lint the code

```bash
yarn lint --fix
```
