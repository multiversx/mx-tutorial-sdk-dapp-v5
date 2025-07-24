#!/bin/bash

echo "=== Step 4: Configuring eslint and prettier ==="

# Change to root directory
cd ../../

# Install eslint and prettier dependencies
yarn add -D @eslint/js eslint prettier eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-exports

# Create .prettierrc
cat > .prettierrc << 'EOF'
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
EOF

# Create eslint.config.js
cat > eslint.config.js << 'EOF'
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
EOF

echo "✅ ESLint and Prettier configured successfully!"
echo "✅ .prettierrc created"
echo "✅ eslint.config.js created"
echo "Next: Run './step_05_configure_vite.sh'" 