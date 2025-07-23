# React + Tailwind + MultiversX dApp Setup Scripts

This directory contains bash scripts to automate the setup process for a React dApp with Tailwind CSS, as described in Video 01 of the MultiversX dApp tutorial series.

## Quick Start

### Option 1: Run All Steps Automatically
```bash
./run_all_steps.sh
```
This will run all 8 steps with confirmation prompts for each step.

### Option 2: Run Steps Individually
Execute the scripts in order:

```bash
./step_01_create_project.sh
./step_02_install_dependencies.sh
./step_03_install_tailwind.sh
./step_04_configure_eslint_prettier.sh
./step_05_configure_vite.sh
./step_06_configure_tsconfig.sh
./step_07_add_lint_command.sh
./step_08_start_dev_server.sh
```

## What Each Script Does

### Step 1: `step_01_create_project.sh`
- Creates a new Vite React project with TypeScript template
- Project name: `ping-pong-dapp`

### Step 2: `step_02_install_dependencies.sh`
- Installs the initial project dependencies using yarn

### Step 3: `step_03_install_tailwind.sh`
- Installs Tailwind CSS and its dependencies
- Creates `tailwind.config.js`
- Creates `postcss.config.js`

### Step 4: `step_04_configure_eslint_prettier.sh`
- Installs ESLint, Prettier, and all related plugins
- Creates `.prettierrc` configuration
- Creates `eslint.config.js` with comprehensive rules

### Step 5: `step_05_configure_vite.sh`
- Installs Vite plugins (basic SSL, node polyfills, SVGR, tsconfig paths)
- Creates `vite.config.ts` with development server configuration

### Step 6: `step_06_configure_tsconfig.sh`
- Removes extra TypeScript config files
- Creates a unified `tsconfig.json` with proper settings

### Step 7: `step_07_add_lint_command.sh`
- Adds lint script to `package.json`
- Runs the linter to fix any initial issues

### Step 8: `step_08_start_dev_server.sh`
- Starts the development server
- Server runs on `https://localhost:3000`

## Prerequisites

Before running these scripts, make sure you have:
- Node.js (version 16 or higher)
- Yarn package manager
- Git (optional, for version control)

## Project Structure After Setup

After running all scripts, you'll have a `ping-pong-dapp` directory with:
- React + TypeScript setup
- Tailwind CSS configured
- ESLint + Prettier configured
- Vite development server with plugins
- Ready for MultiversX SDK integration

## Next Steps

After the setup is complete, you can:
1. Start developing your dApp in the `ping-pong-dapp` directory
2. Add MultiversX SDK dependencies for blockchain integration
3. Build your ping-pong game logic

## Troubleshooting

If any script fails:
1. Check that you have the required prerequisites
2. Make sure you have internet connection for downloading packages
3. Ensure you have sufficient disk space
4. Check that no other process is using port 3000

## Notes

- All scripts are designed to be idempotent (safe to run multiple times)
- The development server (Step 8) will run indefinitely until stopped with Ctrl+C
- Each script provides clear success/failure feedback and next step instructions 