# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for installing the MultiversX SDK and its dependencies. The purpose of this step is to set up the project to use the MultiversX SDK.

Video 5:
Installing sdk-dapp

### Step 1: Install sdk-dapp & its dependencies

```bash
yarn add @multiversx/sdk-dapp @multiversx/sdk-core @multiversx/sdk-dapp-utils @multiversx/sdk-dapp-ui bignumber.js axios
```

### Step 2: Create the lib folder from where we will re-export dependencies

```bash
mkdir lib
```

We will also create a `lib/sdk-dapp/` folder where we will re-export the dependencies.

```bash
mkdir -p lib/sdk-dapp
```

For each dependency, we will create a file in the `lib/sdk-dapp/` folder and re-export the dependency. First is sdk-dapp.helpers.ts

```bash
touch lib/sdk-dapp/sdk-dapp.helpers.ts
```

It will have the following content:

```ts
export { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
```

Now we have to create the index files and re-export the dependencies.

```bash
touch lib/sdk-dapp/index.ts
```

The `sdk-dapp/index.ts` file will have the following content:

```ts
export * from './sdk-dapp.helpers';
```

Now we have to create the main index.ts file in the lib folder.

```bash
touch lib/index.ts
```

The `index.ts` file will have the following content:

```ts
export * from './sdk-dapp';
```
