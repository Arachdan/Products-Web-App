# Products Web App

A lightweight inventory management application built with React, Bootstrap, and PHP. The app lets users view products, add new items, validate form data, and delete selected entries through a simple CRUD workflow.

## Overview

Products Web App is a small product dashboard designed around a real-world workflow: manage inventory, track item details, and handle form validation before sending data to a backend service.

The project is intentionally focused and easy to follow, which makes it a good example of a practical frontend application in action.

## Features

- Product list view with dynamic loading
- Add product form with category-based fields
- Support for three product types:
  - DVD
  - Book
  - Furniture
- Input validation before saving
- Real-time validation feedback
- Bulk deletion of selected products
- Routing between the product list and add-product page
- Clean Bootstrap-based interface

## App Preview

The app is designed around two main screens: a product list and a product creation form.

### Product List

```text
+--------------------------------------------------------------+
| Product List                                [ADD] [MASS DELETE] |
+--------------------------------------------------------------+
| ☑ | SKU      | Name              | Price | Type       |
|---|----------|-------------------|-------|------------|
| ☑ | SKU-001  | Wireless Mouse    | $24   | DVD        |
| ☑ | SKU-002  | Clean Code        | $42   | Book       |
| ☑ | SKU-003  | Desk Table        | $180  | Furniture  |
+--------------------------------------------------------------+
```

### Add Product Form

```text
+--------------------------------------------------------------+
| Add Product                                                  |
+--------------------------------------------------------------+
| SKU:   [SKU-004]                                             |
| Name:  [Ergonomic Chair]                                     |
| Price: [$249]                                                |
| Type:  [Furniture ▼]                                         |
| Height: [90]  Width: [60]  Length: [70]                     |
| [Save]              [Cancel]                                 |
+--------------------------------------------------------------+
```

> Screenshots will be added here as the project evolves.

## Product Types

The app supports three product categories, each with a different set of required attributes:

- DVD: size in MB
- Book: weight in KG
- Furniture: height, width, and length in CM

This logic is implemented in `src/product_classes.js` and enforced through the validation layer in `src/inputsCheck.js` and `src/typeCheck.js`.

## Tech Stack

### Frontend

- React 18
- React Router DOM
- Bootstrap 5
- jQuery
- JavaScript (ES6+)

### Backend

- PHP API endpoints for loading, saving, and deleting products

## Architecture

```text
src/
├── App.js
├── App.css
├── AddProductForm.js
├── AddProductUpperFragment.js
├── ProductList.js
├── ProductListUpperFragment.js
├── product_classes.js
├── inputsCheck.js
├── typeCheck.js
├── saveProduct.js
├── loadProducts.js
├── DefaultAddingAlert.js
├── Note.js
├── index.js
├── index.css
├── logo.svg
├── reportWebVitals.js
├── pages/
│   ├── AddProductPage.js
│   └── ProductListPage.js
├── public/
├── package.json
└── README.md
```

## How It Works

1. The user opens the product list page.
2. Product data is fetched from a PHP endpoint.
3. The user navigates to the add-product page.
4. The selected product type determines which input fields appear.
5. Client-side validation checks required values before submission.
6. Valid data is sent to the backend.
7. The product list refreshes after successful save or delete actions.

## Validation

Before a product can be saved, the app checks:

- SKU is present
- name is present
- price is valid and greater than zero
- type-specific attributes are filled correctly

This prevents invalid entries from being submitted to the server.

## Backend Integration

The frontend uses external PHP endpoints to handle product operations:

- load products
- save product
- delete selected products

This keeps the front-end focused on the user experience while the backend takes care of storage and retrieval.

## Getting Started

### Requirements

- Node.js
- npm
- access to the configured PHP backend endpoints

### Installation

```bash
git clone https://github.com/Arachdan/Products-Web-App.git
cd Products-Web-App
npm install
```

### Run the app locally

```bash
npm start
```

### Production build

```bash
npm run build
```

## Notes

This is a small, practical product management app built for learning, experimentation, and portfolio presentation. It focuses on clear flow, straightforward UI, and a realistic example of frontend validation and API communication.

## Author

Built by Arachdan.
