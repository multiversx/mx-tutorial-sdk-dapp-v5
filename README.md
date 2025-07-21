# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for the instructive video series on how to build a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

Video 1:

1.1 Create a new React project with Vite

Step 1: Create a new Vite React project (TypeScript template):

```bash
npx create-vite@latest ping-pong-dapp --template react-ts --yes
```

Step 2: Move into your app directory and install dependencies:

```bash
cd ping-pong-dapp && yarn
```

Step 3: Install Tailwind CSS and its dependencies:

```bash
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/postcss
npx tailwindcss init -p
```

Add tailwind config:

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add postcss config:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Step 4: Add eslint and prettier to the project:

```bash
yarn add -D eslint prettier
```

Step 5: Configure eslint and prettier:

```bash
yarn add -D eslint-config-prettier eslint-plugin-prettier
```


Step 6: Check if the project is running using BrowserMCP


