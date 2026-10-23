# Products Web App

A polished React-based product management application for creating, listing, validating, and deleting inventory items. The project combines a modern frontend with a lightweight PHP backend service, enabling users to manage products through a clean and intuitive workflow.

## Overview

This application was built as a practical inventory dashboard for product records. It includes a product list view, an add-product form, type-specific validation, and bulk deletion support. The frontend is implemented in React and uses Bootstrap styling with client-side routing to provide a compact but functional user experience.

The project follows a simple architecture:

- a product list page for viewing inventory
- an add-product page for entering product data
- type-based product forms for DVD, Book, and Furniture
- client-side validation before submission
- server communication through PHP endpoints for loading and persisting products

## Features

- Product catalog overview with dynamic rendering
- Add products with SKU, name, and price fields
- Product type switching between:
  - DVD
  - Book
  - Furniture
- Type-specific fields and validation rules
- Real-time input validation for numeric values and required data
- Mass delete by selecting multiple products
- React Router navigation between list and add-product pages
- Clean Bootstrap-based UI with responsive layout

## Tech Stack

- React 18
- React Router DOM
- Bootstrap 5
- React Bootstrap
- jQuery
- JavaScript (ES6+)
- PHP backend endpoints hosted externally

## Application Flow

The app is organized around two main screens:

1. Product List Page
   - Displays all saved products
   - Includes Add and Mass Delete actions
   - Fetches product data through a remote PHP endpoint

2. Add Product Page
   - Lets users enter product information
   - Allows selection of product type from a dropdown
   - Displays dynamic attribute fields depending on the selected type
   - Prevents invalid or incomplete submissions

## Product Types

The code implements three product classes in `src/product_classes.js`:

- `DVD` - requires size in MB
- `Book` - requires weight in KG
- `Furniture` - requires height, width, and length in CM

Each type extends a base `Product` class and stores custom attributes through DOM-driven values and session storage.

## Validation Logic

The app validates input before saving data:

- SKU must be present
- Name must be present
- Price must be a number greater than 0
- Type-specific attributes must be valid and non-empty

This logic is handled in:

- `src/inputsCheck.js`
- `src/typeCheck.js`
- `src/DefaultAddingAlert.js`

The form blocks submission if validation fails and shows alerts for invalid input.

## Routing

The app uses `react-router-dom` with the following routes:

- `/` → Product list page
- `/add-product` → Add product page

The main route configuration is defined in `src/App.js`.

## Backend Integration

The frontend communicates with a PHP backend hosted at:

- `https://teaswadansc.000webhostapp.com/PHP/load_products.php`
- `https://teaswadansc.000webhostapp.com/PHP/save_product.php`
- `https://teaswadansc.000webhostapp.com/PHP/delete_selected_products.php`

This means the repository contains the frontend logic and UI, while persistence is handled externally by the server-side PHP code.

## Project Structure

```text
Products-Web-App/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── AddProductForm.js
│   ├── AddProductUpperFragment.js
│   ├── DefaultAddingAlert.js
│   ├── Note.js
│   ├── ProductList.js
│   ├── ProductListUpperFragment.js
│   ├── inputsCheck.js
│   ├── loadProducts.js
│   ├── product_classes.js
│   ├── saveProduct.js
│   ├── typeCheck.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── pages/
│       ├── AddProductPage.js
│       └── ProductListPage.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── LICENSE (if present)
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- Access to the PHP backend endpoints used by the app

### Installation

```bash
git clone https://github.com/Arachdan/Products-Web-App.git
cd Products-Web-App
npm install
```

### Run the app

```bash
npm start
```

This starts the React development server locally. The app will open in your browser and use the configured backend endpoints to load and save product data.

## Production Build

```bash
npm run build
```

This generates a production-ready bundle for deployment.

## Notes

This project demonstrates a clean front-end CRUD workflow and is suitable for portfolio use, student projects, and product inventory prototypes. The codebase is intentionally lightweight and practical, with strong emphasis on form interaction, validation, and data flow.

## Summary

Products Web App is a React inventory management interface that allows users to manage stock in a simple but effective way. It combines route-based navigation, dynamic form generation, validation, and PHP-backed persistence to deliver a complete product management experience in a compact application.

## Author

Built by Arachdan.
