---
title: "Arkadiko App"
date: "2021-04-01"
thumb: "/thumbs/arkadiko-app-thumb.png"
details:
  - "/full/arkadiko/arkadiko-app-swap.png"
  - "/full/arkadiko/arkadiko-app-swap-d.png"
  - "/full/arkadiko/arkadiko-app-stake.png"
  - "/full/arkadiko/arkadiko-app-stake-d.png"
  - "/full/arkadiko/arkadiko-app-borrow.png"
  - "/full/arkadiko/arkadiko-app-borrow-d.png"
  - "/full/arkadiko/arkadiko-app-governance.png"
  - "/full/arkadiko/arkadiko-app-governance-d.png"
  - "/full/arkadiko/arkadiko-app-liquidations.png"
  - "/full/arkadiko/arkadiko-app-liquidations-d.png"
  - "/full/arkadiko/arkadiko-app-onboarding-1.png"
  - "/full/arkadiko/arkadiko-app-onboarding-2.png"
  - "/full/arkadiko/arkadiko-app-onboarding-3.png"
  - "/full/arkadiko/arkadiko-app-onboarding-4.png"
  - "/full/arkadiko/arkadiko-analytics-graph.png"
  - "/full/arkadiko/arkadiko-analytics-tables.png"
  - "/full/arkadiko/arkadiko-analytics-balances.png"
excerpt: "Complete DeFi application for Bitcoin-backed stablecoin protocol. Led front-end implementation for swap, lending, staking, and governance features from launch."
tags: ["Next.js", "React", "Tailwind CSS", "DeFi", "Design System"]
order: 1
---

**Overview**
Arkadiko is a comprehensive DeFi protocol built on Bitcoin via the Stacks blockchain, offering a Bitcoin-backed stablecoin (USDA), decentralized lending, token swaps, staking, and DAO governance. The application enables users to mint stablecoins by depositing collateral, participate in liquidations, provide liquidity, stake tokens for rewards, and vote on protocol proposals.

**My Role & Contributions**
**Lead Front-End Developer & Design Implementation (2021 – Present)**

I've been responsible for all front-end design implementation since the protocol's launch, translating Figma designs into production code and building out the complete user interface for a multi-feature DeFi platform.

**Key Responsibilities:**

- Implemented five core product features from scratch: **Swap** (token exchange), **Borrow** (collateralized lending with vault management), **Stake** (token staking and liquidity provision), **Liquidations** (auction interface for vault liquidations), and **Governance** (DAO proposal voting system)
- Built onboarding flows with progressive disclosure, guiding users through complex DeFi operations step-by-step with contextual tooltips and warnings
- Created reusable component library with consistent design patterns across all features—token selectors, balance displays, transaction modals, APR calculations
- Developed real-time data displays showing pool statistics, collateralization ratios, liquidation risks, staking rewards, and governance proposals
- Implemented responsive layouts ensuring full functionality across desktop and mobile devices
- Established typography system using Kollektif and Montserrat for clear information hierarchy
- Collaborated closely with smart contract developers to ensure accurate blockchain data integration and transaction handling

**Technical Highlights:**

- Built modular Next.js architecture supporting independent feature development and deployment
- Implemented Tailwind CSS design system with custom color palette (signature purple/blue gradient, warning states, success indicators)
- Created complex form validation for financial inputs with slippage tolerance, collateral ratios, and transaction previews
- Developed real-time balance tracking across multiple tokens (STX, xBTC, USDA, DIKO, atALEX, stDIKO)
- Integrated wallet connection with state management for authenticated user flows
- Optimized performance for data-heavy interfaces showing large lists of governance proposals and liquidity pools

**Design System:**

- Consistent card-based layouts with subtle shadows and rounded corners
- Color-coded states: purple for primary actions, yellow for warnings, green for success
- Icon system for crypto assets with clear visual hierarchy
- Data visualization with APR percentages, pool statistics, and reward distributions
- Dark mode support for better readability with financial data
- Platform is adapted to smaller devices

**Analytics Dashboard**

In addition to the main application, I designed and built the [Arkadiko Analytics Dashboard](https://arkadiko.finance/analytics)—a comprehensive data portal providing real-time visibility into protocol health and user activity.

- **Designed and implemented** a clean, data-dense interface displaying TVL, token prices, vault balances, pool statistics, and contract-level breakdowns
- **Structured complex DeFi data** into digestible thematic sections: financial metrics, collateral reserves, protocol actions, and governance holdings
- **Integrated live data sources** including DeFiLlama TVL charts and real-time blockchain data for STX/stSTX reserves, USDA liquidation pools, and swap liquidity
- **Optimized for performance** with fast load times despite dense numerical data and multiple chart visualizations
- **Enhanced protocol transparency** by surfacing smart contract data that was previously only accessible through block explorers

**Tech Stack**

- Next.js / React (application framework)
- Tailwind CSS (styling and responsive design)
- Figma (design handoff and collaboration)
- GitHub (version control)
- Stacks blockchain integration

**Impact**

- Supported protocol growth from launch to over $100M+ in total value locked
- Enabled thousands of users to interact with Bitcoin-based DeFi products
- Maintained consistent user experience across continuous feature additions and protocol upgrades
- Contributed to protocol's reputation for polished, accessible DeFi interfaces
