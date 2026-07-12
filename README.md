# K'lliao - Sales Management System

## Description
An inventory and point-of-sale management system developed for K'lliao, a local startup specializing in frozen liquor drinks.
Designed to replace manual record-keeping in notebooks and/or planners with a simple and comprehensive digital solution

## Tech Stack
- **Backend:** Node.js + Express + Better-SQLite3
- **Frontend:** React + Vite
- **Database:** SQLite (single file, local storage)

## Project Structure
klliao/
├── backend/
│   ├── database/
│   │   ├── db.js           ← database connection
│   │   └── schema.sql      ← table definitions
│   ├── routes/             ← URL definitions
│   ├── controllers/        ← business logic
│   └── index.js            ← server entry point
└── frontend/               ← pending (Phase 3)

## Development Progress
### Phase 1 - Database Design - Completed
- [x] Data model designed
- [x] schema.sql created with all tables
- [x] Database connection (db.js)
- [x] .gitignore configured

### Phase 2 - Backend / API 🔄
- [x] GET /categories - returns all categories
- [x] POST /categories - create a category
- [x] Sizes API (full CRUD)
- [x] Products API (full CRUD)
- [x] Product Variants API (full CRUD)
- [ ] Sales API
- [ ] Stock entries API

## Seed Data loaded
- Categories: slushies, drinks, snacks, extras
- Sizes: 12oz, 16oz, 18oz, 22oz, 32oz
- Products: Slush, DeTodito, Doritos, Choclitos, Aguila Light, Pilsen, Water bottle, Syringe, Watermelon tape, Gummy, Red Lips

### Phase 3 - Frontend - pending
- [ ] React + Vite setup
- [ ] Sales registration view
- [ ] Products management view
- [ ] Dashboard and reports

## Database Tables
| Table | Description |
|-------|-------------|
| `product_categories` | Product categories (shaved ice, soda, snack, beer) |
| `product_sizes` | Sizes for shaved ice variants |
| `product_flavors` | Flavors for shaved ice variants |
| `products` | All products with base price and stock |
| `product_variants` | Size + flavor combinations for shaved ice |
| `sales` | Sale header (date, time, payment method, total) |
| `sale_details` | Line items per sale |
| `stock_entries` | Inventory purchases header |
| `stock_entry_details` | Line items per inventory purchase |

## Key Design Decisions
- **SQLite over PostgreSQL:** Small local business, no need for a database server
- **No suppliers table:** Owners buy directly by their own from nearby stores, no formal suppliers
- **Intermediate inventory:** Stock tracked in real time via `current_stock` in `products`
- **Historical price integrity:** `unit_price` stored in `sale_details` to preserve accurate sales history even if product prices change
- **Variants model:** Sizes and flavors handled in `product_variants` to support business growth without restructuring

## How to Run
### Backend
cd backend
npm run dev
Server runs at http://localhost:3000