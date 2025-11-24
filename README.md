# Building a React dApp from scratch with @multiversx/sdk-dapp

Welcome to the MultiversX sdk-dapp v5 tutorial! 🚀

#### Overview

This tutorial will guide you through the process of building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

You can find the video tutorials on the [MultiversX YouTube channel](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

You can find the documentation for the sdk-dapp v5 in the [MultiversX sdk-dapp v5 documentation](https://github.com/multiversx/mx-sdk-dapp).

#### How to use this tutorial

Either follow along with the video tutorials or go to a specific section either by checking out a specific git commit or by running the setup scripts.

Example: Running the setup scripts for the first section
```bash
cd ./mx-tutorial-sdk-dapp-v5/tutorial/01_create_react_app && bash run_project_setup.sh
```

This will run all the setup scripts for all the sections.
```bash
cd ./mx-tutorial-sdk-dapp-v5/tutorial && bash run_all.sh
```

## Main sections

1. Creating a new React project with Vite
2. Preparing the basic App structure with routing
3. Installing sdk-dapp & its dependencies
4. Creating the Dashboard with Widgets
5. Creating Header, Footer and Layout components
6. Connecting and Testing the dApp functionality

## Section 1: Creating a new React project with Vite

1. Create a new Vite React project (TypeScript template)
2. Install dependencies
3. Install Tailwind CSS and its dependencies
4. Add tailwind.config.js configuration
5. Add postcss.config.js configuration
6. Replace contents of src/index.css with Tailwind directives
7. Copy the multiversx-white.svg file to the public folder
8. Configure eslint and prettier
9. Configure .prettierrc file
10. Configure eslint.config.js file
11. Install Vite configuration dependencies
12. Configure vite.config.ts (globals and https)
13. Configure tsconfig.json (absolute imports)
14. Add formatting scripts to package.json
15. Run lint to fix errors
16. Check if the project is running

## Section 2: Preparing the basic App structure with routing

1. Install react-router-dom
2. Create pages folder and Home page component
3. Create routes folder under /src
4. Create routes configuration files (index.ts, routes.ts)
5. Create Layout component
6. Update App.tsx file with routing configuration
7. Run lint to fix errors

## Section 3: Installing sdk-dapp

1. Install MultiversX SDK packages (@multiversx/sdk-dapp and related dependencies)

## Section 4: Creating the Dashboard with Widgets

1. Create configs for the dApp (config.devnet.ts, contract address)
2. Create the dashboard folder structure
3. Install FontAwesome and classnames dependencies
4. Create helper components (Button, Label, OutputContainer)
5. Create the Account widget component
6. Create the PingPong widget component
7. Create widgets index file for exports
8. Create the Dashboard page component
9. Export the Dashboard page from pages
10. Update the routes configuration with Dashboard
11. Run lint to fix errors

## Section 5: Creating Header, Footer and Layout components

1. Create generic link component
2. Create Unlock page component
3. Create Header component with navigation
4. Create Footer component
5. Update Layout component to use Header and Footer
6. Create Transactions widget component
7. Update Dashboard page to include Transactions widget
8. Run lint to fix errors

## Section 6: Interacting with the Smart Contract

1. Initialize SDK in main.tsx with dApp configuration
2. Update Unlock component and Header navigation with sdk-dapp hooks
3. Create FormatAmount component for account widget
4. Create TransactionsTable and update Transactions widget
5. Create PingPong widget with contract ABI and functionality
6. Create AuthenticatedRoutesWrapper component for route protection

## User Flow:

```mermaid
%% User Flow
flowchart TD
    A[User Enters App] --> B{Is User Logged In?}

    B -->|No| C[Home Page]
    B -->|Yes| D[Dashboard]

    C --> E{User Clicks Unlock/Connect}
    E --> F[Unlock Panel Opens]
    F --> G{Wallet Connection Successful?}

    G -->|Yes| H[Redirect to Dashboard]
    G -->|No/Cancelled| I[Stay on Home Page]

    D --> J{User Logs Out}
    J --> K[Redirect to Home Page]

    D --> L[Account Widget]
    D --> M[Ping-Pong Smart Contract Widget]
    D --> N[Transactions Widget]

    M --> O[Send Ping Transaction]
    M --> P[Send Pong Transaction]

    O --> Q[Transaction Processing]
    P --> Q

    Q --> R{Transaction Success?}
    R -->|Yes| S[Update UI State]
    R -->|No| T[Show Error]

    S --> U[Refresh Account Balance]
    T --> V[Show Error Message]

    L --> W[Display Account Info]
    L --> X[Show Balance & Address]

    N --> Y[Show Transaction History]
    N --> Z[Display Transaction Status]

    %% Decision boxes (diamond shapes)
    style B fill:#444444,stroke:#444444,color:#ffffff
    style E fill:#444444,stroke:#444444,color:#ffffff
    style G fill:#444444,stroke:#444444,color:#ffffff
    style J fill:#444444,stroke:#444444,color:#ffffff
    style R fill:#444444,stroke:#444444,color:#ffffff

    %% Regular boxes (rectangles)
    style A fill:#666666,stroke:#666666,color:#ffffff
    style C fill:#666666,stroke:#666666,color:#ffffff
    style D fill:#666666,stroke:#666666,color:#ffffff
    style F fill:#666666,stroke:#666666,color:#ffffff
    style H fill:#666666,stroke:#666666,color:#ffffff
    style I fill:#666666,stroke:#666666,color:#ffffff
    style K fill:#666666,stroke:#666666,color:#ffffff
    style L fill:#666666,stroke:#666666,color:#ffffff
    style M fill:#666666,stroke:#666666,color:#ffffff
    style N fill:#666666,stroke:#666666,color:#ffffff
    style O fill:#666666,stroke:#666666,color:#ffffff
    style P fill:#666666,stroke:#666666,color:#ffffff
    style Q fill:#666666,stroke:#666666,color:#ffffff
    style S fill:#666666,stroke:#666666,color:#ffffff
    style T fill:#666666,stroke:#666666,color:#ffffff
    style U fill:#666666,stroke:#666666,color:#ffffff
    style V fill:#666666,stroke:#666666,color:#ffffff
    style W fill:#666666,stroke:#666666,color:#ffffff
    style X fill:#666666,stroke:#666666,color:#ffffff
    style Y fill:#666666,stroke:#666666,color:#ffffff
    style Z fill:#666666,stroke:#666666,color:#ffffff
```

## Component structure

```mermaid
%% Application structure
flowchart TD
    %% Pages Group
    subgraph " Pages"
        A[App.tsx]
        C[Home.tsx]
        D[Dashboard.tsx]
        E[Unlock.tsx]
    end

    %% Layout Components
    A --> B[Layout.tsx]

    %% Layout Components
    B --> F[Header.tsx]
    B --> G[Footer.tsx]
    B --> H[AuthRedirectWrapper.tsx]

    %% Dashboard Widgets Group
    subgraph "Dashboard Widgets"
        I[Account.tsx]
        J[PingPongAbi.tsx]
        K[Transactions.tsx]
    end

    %% Dashboard Widgets
    D --> I
    D --> J
    D --> K

    %% Custom Hooks Group
    subgraph "Hooks"
        V[useSendPingTransaction]
        W[useSendPongTransaction]
        X[useGetSecondsRemaining]
        CC[useGetPingAmount]
        DD[useGetSmartContractFactory]
        ZZ[useGetScController]
    end

    %% Custom Hooks Usage
    J --> V
    J --> W
    J --> X

    %% Hook Dependencies
    V --> CC
    V --> DD

    W --> DD

    CC --> ZZ
    DD --> ZZ

    %% Common Components Group (positioned below)
    ZZ ~~~ P
    subgraph "Components"
        P[Button.tsx]
        N[Label.tsx]
        M[OutputContainer.tsx]
        GG[Generic Link.tsx]
        O[FormatAmount.tsx]
        T[TransactionsTable.tsx]
    end


    %% Styling
    style A fill:#000000,stroke:#000000,color:#ffffff
    style B fill:#000000,stroke:#000000,color:#ffffff
    style C fill:#000000,stroke:#000000,color:#ffffff
    style D fill:#000000,stroke:#000000,color:#ffffff
    style E fill:#000000,stroke:#000000,color:#ffffff
    style F fill:#000000,stroke:#000000,color:#ffffff
    style G fill:#000000,stroke:#000000,color:#ffffff
    style H fill:#000000,stroke:#000000,color:#ffffff
    style I fill:#000000,stroke:#000000,color:#ffffff
    style J fill:#000000,stroke:#000000,color:#ffffff
    style K fill:#000000,stroke:#000000,color:#ffffff
    style M fill:#000000,stroke:#000000,color:#ffffff
    style N fill:#000000,stroke:#000000,color:#ffffff
    style O fill:#000000,stroke:#000000,color:#ffffff
    style P fill:#000000,stroke:#000000,color:#ffffff
    style T fill:#000000,stroke:#000000,color:#ffffff
    style V fill:#000000,stroke:#000000,color:#ffffff
    style W fill:#000000,stroke:#000000,color:#ffffff
    style X fill:#000000,stroke:#000000,color:#ffffff
    style CC fill:#000000,stroke:#000000,color:#ffffff
    style DD fill:#000000,stroke:#000000,color:#ffffff
    style GG fill:#000000,stroke:#000000,color:#ffffff
```
