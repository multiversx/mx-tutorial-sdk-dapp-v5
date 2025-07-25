# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for installing the react-router-dom package and making the basic pages with routing.

Video 2:
Preparing the basic App structure with routing.

### Step 1: Install react-router-dom

```bash
yarn add react-router-dom
```

### Step 2: Creating the pages folder and the Home page

```bash
mkdir -p src/pages
touch src/pages/Home.tsx
```

Add the following content to Home.tsx

```tsx
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex flex-1 rounded-xl bg-white p-6 sm:flex-row items-center justify-center'>
      <div className='flex flex-col-reverse sm:flex-row items-center h-full w-full'>
        <div className='flex items-start sm:items-center h-full sm:w-1/2 sm:bg-center'>
          <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl'>
            <div>
              <h1>Ping-Pong dApp</h1>
              <p className='text-gray-400'>
                An{' '}
                <a
                  href='https://www.npmjs.com/package/@multiversx/sdk-dapp'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  sdk-dapp v.5
                </a>{' '}
                example project <br className='hidden xl:block' />
                built on the{' '}
                <a
                  href='https://multiversx.com/'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  MultiversX
                </a>{' '}
                blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className='h-4/6 bg-mvx-white bg-contain bg-no-repeat w-1/2 bg-center' />
        <Outlet /> {/* This is where the child routes will be rendered */}
      </div>
    </div>
  );
};
```

Add an index.ts file to the pages folder

```bash
touch src/pages/index.ts
```

Add the following content to index.ts

```ts
export * from './Home';
```

Add an index.ts file to the pages folder

```bash
touch src/pages/index.ts
```

Add the following content to index.ts

```ts
export * from './Home';
```

### Step 3: Create the routes folder under /src

```bash
mkdir -p src/routes
```

### Step 4: Create the index.ts file under /src/routes

```bash
touch src/routes/index.ts
touch src/routes/routes.ts
```

Add the following content to routes.ts

```ts
import { Home } from 'pages';
import { RouteType } from 'types';

export enum RouteNamesEnum {
  home = '/'
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
```

Step 5: Create a Layout component

```bash
mkdir -p src/components
touch src/components/Layout.tsx
```

Add the following content to Layout.tsx

```tsx
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
```

Create an index.ts file in the components folder

```bash
touch src/components/index.ts
```

Add the following content to index.ts

```ts
export * from './Layout';
```

Step 6: Update the App.tsx file

```ts
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from './components';

export default function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                {routes.map((route) => (
                <Route
                    key={`route-key-${route.path}`}
                    path={route.path}
                    element={<route.component />}
                >
                    {route.children?.map((child) => (
                    <Route
                        key={`route-key-${route.path}-${child.path}`}
                        path={child.path}
                        element={<child.component />}
                    />
                    ))}
                </Route>
                ))}
            </Routes>
        </Layout>
    </Router>
  );
};
```

Step 7: Runt lint again to fix the errors

```bash
yarn lint --fix
```
