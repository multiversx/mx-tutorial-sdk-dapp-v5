# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for creating the dashboard page with account, ping-pong and transaction history widgets.

Video 4:
Creating the dashboard page.

### Step 1: Creating configs for our dApp

```bash
mkdir -p src/config
touch src/config/config.devnet.ts
touch src/config/index.ts
```

Add the following content to config.devnet.ts

```ts
import { EnvironmentsEnum } from 'lib';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qde96pq';
export const environment = EnvironmentsEnum.devnet;
```

We will add the following scripts to package.json:

```json
    "start-devnet": "yarn run copy-devnet-config & vite dev",
    "copy-devnet-config": "cp ./src/config/config.devnet.ts ./src/config/index.ts",
```

Create a new src/lib/sdk-dapp/sdk-dapp.types.ts file with the following content:

```ts
export { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
```

Update the `src/lib/sdk-dapp/index.ts` file with the following content:

```ts
export * from './sdk-dapp.helpers';
export * from './sdk-dapp.types';
```

### Step 2: Create the dashboard folder

The Dashboad page will consist of a list of widgets. We will go on to create the widgets one by one, and then we will add them to the Dashboard page.

```bash
mkdir -p src/pages/Dashboard
mkdir -p src/pages/Dashboard/components
mkdir -p src/pages/Dashboard/widgets
```

In the `src/pages/Dashboard/components` folder, create a new file called `Widget.tsx`:

```bash
touch src/pages/Dashboard/components/Widget.tsx
```

Add the following content to Widget.tsx:

```tsx
import { ReactElement } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type WidgetType = {
  description?: string;
  reference: string;
  title: string;
  widget: () => ReactElement;
};

export const Widget = ({
  title,
  description,
  reference,
  widget: MxWidget
}: WidgetType) => {
  return (
    <div className='flex flex-col flex-1 rounded-xl bg-white p-6 justify-center'>
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
```

Create the widgets index.ts file:

```bash
touch src/pages/Dashboard/components/index.ts
```

Add the following content to index.ts:

```ts
export * from './Widget';
```

Step 3: Install FontAwesome and classnames

```bash
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
yarn add classnames
```

Step 4: Add Button, Label and OutputContainer helper components

```bash
touch src/components/Label.tsx
touch src/components/OutputContainer.tsx
touch src/components/Button.tsx
```

Add the following content to Label.tsx:

```tsx
import { PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return <label className='text-gray-500'>{children}</label>;
};
```

Add the following content to OutputContainer.tsx:

```tsx
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
```

Add the following content to Button.tsx:

```tsx
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
```

Re-export the Label, OutputContainer and Button by appending the following content to the `src/components/index.ts` file:

```ts
export * from './Label';
export * from './OutputContainer';
export * from './Button';
```

Step 5: Create the Account widget

```bash
touch src/pages/Dashboard/widgets/Account.tsx
```

Add the following content to Account.tsx with placeholder values for the account address, shard and balance:

```tsx
import { Label, OutputContainer } from 'components';

export const Account = () => {
  return (
    <OutputContainer>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <Label>Address:</Label>
          <span data-testid='accountAddress'> ACCOUNT.ADDRESS</span>
        </p>

        <p>
          <Label>Shard: </Label> ACCOUNT.SHARD
        </p>

        <p>
          <Label>Balance: </Label>
          ACCOUNT.BALANCE
        </p>
      </div>
    </OutputContainer>
  );
};
```

Step 6: Create the PingPongAbi widget

```bash
touch src/pages/dashboard/widgets/PingPongAbi.tsx
```

Add the following content to PingPongAbi.tsx:

```tsx
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, OutputContainer } from 'components';

export const PingPongAbi = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Ping
          </Button>

          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowDown} className='mr-1' />
            Pong
          </Button>
        </div>
      </div>

      <OutputContainer>PING-PONG ABI OUTPUT</OutputContainer>
    </div>
  );
};
```

Step 7: Create a widgets index file

```bash
touch src/pages/Dashboard/widgets/index.ts
```

Export both Account and PingPongAbi widgets by appending the following content to the `src/pages/Dashboard/widgets/index.ts` file:

```ts
export * from './Account';
export * from './PingPongAbi';
```

Step 8: Create the Dashboard page

```bash
touch src/pages/Dashboard/Dashboard.tsx
```

Add the following content to Dashboard.tsx

```tsx
import { Widget, WidgetType } from './components';
import { Account, PingPongAbi } from './widgets';

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

Step 9: Export the Dashboard page

```bash
touch src/pages/Dashboard/index.ts
```

Add the following content to index.ts:

```ts
export * from './Dashboard';
```

Add Dashboard to the main index.ts file by appending the following content to the `src/pages/index.ts` file:

```ts
export * from './Dashboard';
```

Step 10: Update the routes.ts file

Replace the `src/routes/routes.ts` file with the following content:

```ts
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
```

Step 11: Lint the code

```bash
yarn lint --fix
```
