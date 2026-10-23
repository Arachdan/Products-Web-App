# Products Web App

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/PHP-Backend-777BB4?logo=php&logoColor=white" alt="PHP backend" />
  <img src="https://img.shields.io/badge/Status-Portfolio%20Project-0EA5E9" alt="Portfolio project" />
</p>

A React-based product management dashboard built to demonstrate real-world CRUD workflows, validation logic, and frontend-backend integration in a compact, portfolio-ready project.

## Project Overview

Products Web App is a practical inventory management application for adding, reviewing, validating, and removing products. It combines a dynamic React frontend with a PHP-powered API layer to simulate a realistic product administration workflow.

This project is especially relevant for showcasing:

- React component-driven UI development
- dynamic form generation and validation
- clean routing between pages
- API-driven data loading and persistence
- business rules implemented in frontend logic
- portfolio-level project structure and UX polish

## Why This Project Matters

This project demonstrates a complete product management workflow in a small application, which makes it a strong fit for recruiter-facing portfolio work. It reflects the kind of thinking employers look for in frontend roles:

- understanding of user flows
- product data modeling
- validation and defensive coding
- communication between UI and server-side services
- practical implementation of CRUD patterns

## App Preview

### Product List View

![Product List Preview](https://raw.githubusercontent.com/Arachdan/Products-Web-App/master/public/logo192.png)

### Add Product Form

![Add Product Form Preview](https://raw.githubusercontent.com/Arachdan/Products-Web-App/master/public/logo512.png)

> These visuals are included as project placeholders. For a more polished GitHub presentation, replace them with real application screenshots saved in a `public/screenshots` folder and referenced here.

## Visual Mockup

```text
+----------------------------------------------------+
| Product List                          [ADD] [DEL] |
+----------------------------------------------------+
| SKU        | Name           | Price | Type         |
|------------|----------------|-------|--------------|
| SKU-001    | Wireless Mouse | $24   | DVD          |
| SKU-002    | Clean Code     | $42   | Book         |
| SKU-003    | Desk Table     | $180  | Furniture    |
+----------------------------------------------------+

+----------------------------------------------------+
| Add Product                                        |
+----------------------------------------------------+
| SKU:    [SKU-004]                                  |
| Name:   [Ergonomic Chair]                          |
| Price:  [$249]                                     |
| Type:   [Furniture ▼]                              |
| Height: [90]  Width: [60]  Length: [70]            |
| [Save]  [Cancel]                                   |
+----------------------------------------------------+
```

## Key Features

- Product list dashboard with dynamic data loading
- Add product workflow with category-based form fields
- Type-specific product forms for:
  - DVD
  - Book
  - Furniture
- Validation for required fields and numeric constraints
- Mass deletion of selected products
- Clean Bootstrap-based interface
- Client-side navigation using React Router
- External PHP endpoints for persistence and retrieval

## Product Types and Business Rules

The application supports three product categories with different attribute requirements:

- DVD → size in MB
- Book → weight in KG
- Furniture → height, width, and length in CM

The project implements these rules in `src/product_classes.js`, `src/inputsCheck.js`, and `src/typeCheck.js`, providing a realistic example of business rule enforcement in a frontend application.

## Technical Stack

### Frontend

- React 18
- React Router DOM
- Bootstrap 5
- React Bootstrap
- jQuery
- JavaScript (ES6+)

### Backend

- PHP endpoints hosted externally
- REST-style data operations for create, read, and delete actions

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
│   ├── ProductListPage.js
│   └── AddProductPage.js
├── public/
└── package.json
```

## Workflow

1. User opens the product list page.
2. Product data is fetched from the PHP backend.
3. User navigates to the add-product page.
4. Product type is selected from the dropdown.
5. Dynamic form fields appear based on the selected category.
6. The app validates required input.
7. Valid data is submitted to the backend.
8. Product list refreshes after successful save or delete.

## Validation Strategy

The app validates before submission to prevent incorrect data from reaching the API:

- SKU is required
- name is required
- price must be a positive number
- product-specific attributes must be valid

This logic is centralized in:

- `src/inputsCheck.js`
- `src/typeCheck.js`
- `src/DefaultAddingAlert.js`

## Backend Integration

The app uses PHP endpoints to manage data:

- load products
- save product
- delete selected products

These calls are defined in the frontend logic and demonstrate how a React interface can interact with a remote service while keeping the UI layer clean and easy to reason about.

## Getting Started

### Prerequisites

- Node.js
- npm
- access to the configured backend endpoints

### Installation

```bash
git clone https://github.com/Arachdan/Products-Web-App.git
cd Products-Web-App
npm install
```

### Run locally

```bash
npm start
```

### Production build

```bash
npm run build
```

## Project Highlights

This project stands out because it combines multiple important developer skills in a single, understandable application:

- UI composition and layout design
- route-driven navigation
- dynamic form handling
- frontend validation logic
- business-focused data modeling
- API communication and CRUD patterns
- practical, portfolio-friendly project scope

## Summary

Products Web App is a compact but technically meaningful frontend project that demonstrates product management functionality, validation logic, and API-driven interaction in a polished, recruiter-friendly way.

It is ideal for showcasing the kind of thinking and implementation skills expected from a junior or mid-level frontend developer working in a real-world product environment.

## Author

Built by Arachdan.
