# K'lliao - Sales Management System

## Description
An inventory and point-of-sale management system developed for K'lliao, a local startup specializing in frozen liquor drinks.
Designed to replace manual record-keeping in notebooks and/or planners with a simple and comprehensive digital solution.

## Tech Stack
- **Backend:** Node.js + Express + Better-SQLite3
- **Frontend:** React + Vite + React Router DOM
- **Database:** SQLite (single file, local storage)

## Project Structure
klliao/
├── backend/
│   ├── database/
│   │   ├── db.js                ← database connection
│   │   ├── schema.sql           ← table definitions
│   │   └── seed.js              ← seed script with real business data
│   ├── routes/                  ← URL definitions
│   ├── controllers/             ← business logic
│   └── index.js                 ← server entry point
└── frontend/
    ├── src/
    │   ├── components/          ← reusable components (Layout, Navbar)
    │   ├── pages/               ← views (POS, Inventory, Products)
    │   ├── services/            ← axios API services
    │   ├── context/             ← ThemeContext (light/dark mode)
    │   └── assets/              ← logos and images
    └── index.html

## Development Progress
### Phase 1 - Database Design ✅
- [x] Data model designed
- [x] schema.sql created with all tables
- [x] Database connection (db.js)
- [x] .gitignore configured

### Phase 2 - Backend / API ✅
- [x] Categories API (full CRUD)
- [x] Sizes API (full CRUD)
- [x] Products API (full CRUD)
- [x] Product Variants API (full CRUD)
- [x] Stock Entries API (GET all, GET by id, POST with transaction)
- [x] Sales API (GET all, GET by id, POST with transaction)
- [x] Seed script with real business data

### Phase 3 - Frontend 🔄
- [x] React + Vite setup
- [x] Theme context (light/dark mode)
- [x] Global CSS variables with brand colors
- [x] Axios services configured
- [x] Layout and navigation (Navbar, React Router)
- [x] POS view (register sales)
- [x] Inventory view (register stock entries)
- [x] Products view (manage catalog)

## Database Tables
| Table | Description |
|-------|-------------|
| `product_categories` | Product categories (slushies, drinks, snacks, extras) |
| `product_sizes` | Sizes for slush variants (12oz, 16oz, 18oz, 22oz, 32oz) |
| `products` | All products with base price and current stock |
| `product_variants` | Size + liquor combinations for slush with prices |
| `sales` | Sale header (date, time, payment method, total) |
| `sale_details` | Line items per sale |
| `stock_entries` | Inventory purchases header |
| `stock_entry_details` | Line items per inventory purchase |

## Key Design Decisions
- **SQLite over PostgreSQL:** Small local business, no need for a database server
- **No suppliers table:** Owners buy directly from nearby stores, no formal suppliers
- **No flavor tracking:** Price depends only on size and liquor content, not flavor
- **Slush stock not tracked:** Slush is produced on demand, not purchased as units
- **Intermediate inventory:** Stock tracked in real time via `current_stock` in `products`
- **Historical price integrity:** `unit_price` stored in `sale_details` to preserve accurate history even if prices change
- **Variants model:** Size + has_liquor handled in `product_variants` to support business growth
- **UI language:** Interface in Spanish for end users, code in English for portfolio

## Brand Colors
- Primary (cyan): #18C5D9
- Primary dark: #20818C
- Deep teal: #225459
- Dark background: #262223
- Light background: #F2F2F2

## How to Run

### Backend
cd backend
node index.js
Server runs at http://localhost:3000

### Frontend
cd frontend
npm run dev
App runs at http://localhost:5173

### Reset and seed database
1. Stop the server
2. Delete backend/database/kalliao.db
3. Start the server (regenerates tables)
4. Stop the server
5. node database/seed.js
6. Start the server again