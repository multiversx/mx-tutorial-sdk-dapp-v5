# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for the instructive video series on how to build a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Video 1. Creating a new React project with Vite

### Step 1: Create a new Vite React project (TypeScript template).

The project will be created directly in the current directory.

```bash
cd ../../

# Create temporary project and move files to current directory
npx create-vite@latest temp-project --template react-ts --yes
mv temp-project/* .
mv temp-project/.* . 2>/dev/null || true
rm -rf temp-project
```

### Step 2: Install dependencies:

```bash
cd ../../
# Install dependencies
yarn
```

### Step 3: Initialize git repository & create first commit:

```bash
cd ../../
# Initialize git repository and create first commit
git init
git add .
git commit -m "01. Initial commit"
```

### Step 4: Install Tailwind CSS: 

```bash
cd ../../
# Install Tailwind CSS
yarn add -D tailwindcss @tailwindcss/vite @tailwindcss/postcss @tailwindcss/cli
```

### Step 5: Add src/tailwind.css:

```ts
/** @type {import('tailwindcss').Config} */
@import 'tailwindcss';

@theme {
    --background-image-mvx-white: url('../multiversx-white.svg');
}
```

and import it in the main.tsx file:

```ts
import './tailwind.css';
```

### Step 6: Add postcss.config.js:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
```

### Step 7: Replace contents of src/index.css:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
```



### Step 8: Copy the multiversx-white.svg file to the public folder.

```bash
# Copy the multiversx-white.svg file to the public folder
cp tutorial/VIDEO_01/multiversx-white.svg public/multiversx-white.svg
```

### Step 9: Commit the project:

```bash
cd ../../
# Create a new commit
git add .
git commit -m "02. Add tailwind css"
```

### Step 10: Configure eslint and prettier:

```bash
cd ../../
# Install eslint and prettier
yarn add -D @eslint/js eslint prettier eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-exports
```

### Step 11: Configure .prettierrc.

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

### Step 12: Configure eslint.config.js:

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

### Step 13: Configure vite

```bash
cd ../../
# Install vite dependencies
yarn add -D @types/node @vitejs/plugin-basic-ssl vite-plugin-node-polyfills vite-plugin-svgr vite-tsconfig-paths
```

### Step 14: Configure vite.config.ts:

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
  css: {
    postcss: './postcss.config.js'
  },
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

### Step 15: Configure tsconfig.json

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

### Step 16: Add formatting scripts

```json
"lint": "eslint --ext js,ts,tsx src --fix",
"format": "prettier --write . --ignore-path .gitignore --ignore-pattern 'public/**' --ignore-pattern 'node_modules/**' --ignore-pattern 'yarn.lock'",
```

### Step 17: Run lint
```bash
cd ../../
# Run lint  
yarn lint
```

### Step 18: Check if the project is running

```bash
cd ../../
# Run the project
yarn dev
```
