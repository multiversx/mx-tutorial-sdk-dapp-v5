# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for the instructive video series on how to build a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

Video 1:
Creating a new React project with Vite

### Step 1: Create a new Vite React project (TypeScript template).

```bash
npx create-vite@latest ping-pong-dapp --template react-ts --yes
```

### Step 2: Install dependencies:

```bash
cd ping-pong-dapp && yarn
```

### Step 3: Install Tailwind CSS and its dependencies:

```bash
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

Add tailwind config:

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add postcss config:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### Step 4: Configure eslint and prettier:

```bash
yarn add -D @eslint/js eslint prettier eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-exports
```

Configure .eslintrc and .prettierrc.

Use the following .prettierrc file:

```json
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "trailingComma": "none"
}
```

Use the following eslint.config.js file:

```js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sortExports from 'eslint-plugin-sort-exports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    ignores: ['dist/**/*']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      import: importPlugin,
      'sort-exports': sortExports
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/']
        },
        typescript: {
          alwaysTryTypes: true
        }
      },
      react: {
        pragma: 'React',
        version: 'detect'
      }
    },
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',

      // Import ordering rules
      'sort-imports': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],

      // Custom rules from your configuration
      'sort-exports/sort-exports': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          semi: true,
          tabWidth: 2,
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: 'always',
          trailingComma: 'none',
          endOfLine: 'lf'
        }
      ],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'linebreak-style': 'off', // handled by prettier
      quotes: 'off', // handled by prettier
      semi: 'off', // handled by prettier
      'object-curly-newline': 'off',
      'arrow-body-style': 'off',
      'react/jsx-props-no-spreading': 'off',
      'implicit-arrow-linebreak': 'off',
      'func-names': 'off',
      'operator-linebreak': 'off',
      'function-paren-newline': 'off',
      'react/require-default-props': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/destructuring-assignment': 'off',
      'no-shadow': 'off',
      'react/no-array-index-key': 'off'
    }
  }
]);
```

### Step 5: Configure vite

```bash
yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths
```

Configure vite.config.ts file:

```ts
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: true,
    watch: {
      usePolling: false,
      useFsEvents: false
    },
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    basicSsl(),
    tsconfigPaths(),
    svgrPlugin(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true }
    })
  ],
  build: {
    outDir: 'build'
  },
  preview: {
    port: 3002,
    host: 'localhost',
    strictPort: true
  }
});
```

### Step 5: Configure tsconfig.json

Keep only one tsconfig.json file in the root of the project (remove the tsconfig.app.json file and the tsconfig.node.json file).

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

### Step 6: Add formatting scripts and run them

```json
"lint": "eslint --ext js,ts,tsx src --fix",
"format": "prettier --write . --ignore-path .gitignore --ignore-pattern 'public/**' --ignore-pattern 'node_modules/**' --ignore-pattern 'yarn.lock'",

```

```bash
yarn lint
```

### Step 7: Check if the project is running using BrowserMCP

```bash
yarn dev
```


