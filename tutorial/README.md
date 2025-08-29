# Building a React dApp from scratch with @multiversx/sdk-dapp

#### Overview

This is the scenario description for the instructive video chapters on how to build a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Main chapters

1. Creating a new React project with Vite
2. Preparing the basic App structure with routing
3. Installing sdk-dapp & its dependencies
4. Creating the Dashboard with Widgets
5. Creating Header, Footer and Layout components
6. Connecting and Testing the dApp functionality

## VIDEO 1: Creating a new React project with Vite

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

## VIDEO 2: Preparing the basic App structure with routing

1. Install react-router-dom
2. Create pages folder and Home page component
3. Create routes folder under /src
4. Create routes configuration files (index.ts, routes.ts)
5. Create Layout component
6. Update App.tsx file with routing configuration
7. Run lint to fix errors

## VIDEO 3: Installing sdk-dapp

1. Install MultiversX SDK packages (@multiversx/sdk-dapp and related dependencies)

## VIDEO 4: Creating the Dashboard with Widgets

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

## VIDEO 5: Creating Header, Footer and Layout components

1. Create generic link component
2. Create Unlock page component
3. Create Header component with navigation
4. Create Footer component
5. Update Layout component to use Header and Footer
6. Create Transactions widget component
7. Update Dashboard page to include Transactions widget
8. Run lint to fix errors

## VIDEO 6: Interacting with the Smart Contract

1. Initialize SDK in main.tsx with dApp configuration
2. Update Unlock component and Header navigation with sdk-dapp hooks
3. Create FormatAmount component for account widget
4. Create TransactionsTable and update Transactions widget
5. Create PingPong widget with contract ABI and functionality
6. Create AuthenticatedRoutesWrapper component for route protection

## App Logic Chart:
---
title: User Flow
---
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

## Component structure

---
title: Application structure
---
flowchart TD
    %% Pages Group
    subgraph " Pages"
        A[1. App.tsx]
        C[2. Home.tsx]
        D[9. Dashboard.tsx]
        E[11. Unlock.tsx]
    end
    
    %% Layout Components
    A --> B[3. Layout.tsx]
    
    %% Layout Components
    B --> F[12. Header.tsx]
    B --> G[13. Footer.tsx]
    B --> H[23. AuthRedirectWrapper.tsx]
    
    %% Dashboard Widgets Group
    subgraph "Dashboard Widgets"
        I[7. Account.tsx]
        J[8. PingPongAbi.tsx]
        K[14. Transactions.tsx]
    end
    
    %% Dashboard Widgets
    D --> I
    D --> J
    D --> K
    
    %% Custom Hooks Group
    subgraph "Hooks"
        V[17. useSendPingTransaction]
        W[18. useSendPongTransaction]
        X[19. useGetSecondsRemaining]
        CC[20. useGetPingAmount]
        DD[21. useGetSmartContractFactory]
        ZZ[22. useGetScController]
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
        P[4. Button.tsx]
        N[5. Label.tsx]
        M[6. OutputContainer.tsx]
        GG[10. Generic Link.tsx]
        O[15. FormatAmount.tsx]
        T[16. TransactionsTable.tsx]
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
    style L fill:#000000,stroke:#000000,color:#ffffff
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