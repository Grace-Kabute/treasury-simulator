# Treasury Simulator

A lightweight simulation of treasury operations for internal fintech teams managing virtual accounts across multiple currencies.

---

## Product Overview

### Requirement
You manage 10 virtual accounts across 3 currencies: **KES, USD, and NGN**. Treasury teams move funds between accounts to meet payout and FX requirements.

---

## Scope of What I Built

This interface allows users to:
- View all **10 virtual accounts** with:
  - Unique names (e.g. `Mpesa_KES_1`, `Bank_USD_3`)
  - Currency & balance
- **Move money** from one account to another specifying the amount
  - Supports FX conversion when currencies differ
  - Validates sufficient source balance
- **Log all transfers** in a transaction table:
  - Includes filters by account and currency
  - Simulates future-dated transfers
---

## Assumptions Made

- All data is simulated in the frontend (no backend or database)
- Static FX Rates used:
  - 1 USD = 160 KES
  - 1 USD = 1400 NGN
  - 1 NGN = 0.12 KES
- All transfers happen instantly, except future-dated transfers, which are only visual
- No external APIs or real payment integrations used

---

## Live App Link

Replit

## Source code

[Github](https://github.com/Grace-Kabute/treasury-simulator.git)

---

##  Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Hosted on Replit

---

## Author

Kabute Grace  
2025, Niobi

