# Products Web App

A React-based product management dashboard built to demonstrate practical full-stack thinking in a compact, portfolio-ready project. The application enables users to add, validate, browse, and bulk-delete inventory items while communicating with a PHP-backed API for persistence.

## Project Showcase

This project was designed to reflect a realistic product management workflow: a clean inventory interface, dynamic form generation, validation logic, and a straightforward API integration layer. It highlights frontend engineering fundamentals while also showcasing how a UI can interact with an external backend service in a production-like architecture.

From a recruiter perspective, this project demonstrates:

- strong React fundamentals
- component-driven UI design
- route-based application flow
- form validation strategy
- state and client-side data handling
- integration with external services
- understanding of CRUD workflows and product data modeling

## Key Features

- Product list dashboard with dynamic loading from external API
- Add product workflow with category-specific form fields
- Product type switching for DVD, Book, and Furniture
- Input validation before submission
- Real-time warning feedback for invalid values
- Mass deletion of selected products
- Navigation between list and add-product screens
- Modern Bootstrap-based presentation layer

## Product Types Supported

The application supports three inventory categories, each with its own validation rules:

- DVD: size in MB
- Book: weight in KG
- Furniture: height, width, and length in CM

This is implemented through a reusable product model structure and type-specific form generation in `src/product_classes.js`.

## Technical Overview

### Frontend

- React 18
- React Router DOM
- Bootstrap 5
- jQuery for DOM interaction and AJAX requests
- JavaScript ES6+

### Backend Integration

The frontend communicates with PHP endpoints hosted externally for product persistence and retrieval:

- load products
- save product
- delete selected products

This setup demonstrates a practical front-end/back-end split and is a good example of how UI logic can be decoupled from server-side storage responsibilities.

## Architecture

The application follows a simple, scalable structure:

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
└── pages/
    ├── ProductListPage.js
    └── AddProductPage.js
```

## Form Validation Strategy

The application validates required ingredients before saving a product:

- SKU is required
- name is required
- price must be greater than 0
- type-specific attributes must be present and valid

This validation is handled through a combination of:

- `src/inputsCheck.js`
- `src/typeCheck.js`
- `src/DefaultAddingAlert.js`

This demonstrates a clean UX pattern where users receive immediate feedback and invalid submissions are blocked before network requests are triggered.

## Routing and UI Flow

The app uses React Router to manage client-side navigation:

- `/` → product list view
- `/add-product` → product creation page

The UI is intentionally straightforward and focused on delivering a usable inventory workflow rather than over-engineering visual complexity.

## Project Goals

This project was built to showcase core software engineering skills in a small but complete application:

- working with component composition
- building reusable data models
- creating dynamic forms from product type selection
- validating user input before persistence
- communicating with a remote API
- creating a polished and practical user experience

## Getting Started

### Prerequisites

- Node.js
- npm
- access to the configured PHP API endpoints

### Install dependencies

```bash
git clone https://github.com/Arachdan/Products-Web-App.git
cd Products-Web-App
npm install
```

### Run locally

```bash
npm start
```

### Build for production

```bash
npm run build
```

## Why This Project Stands Out

This project is a strong example of a candidate who can build a complete, functional product workflow in a short time. It shows that the developer understands:

- UI structure and user experience
- validation and business rules
- API communication patterns
- product data modeling
- frontend implementation discipline

It is especially suitable for a portfolio because it combines practical functionality with clear, readable code and a realistic business use case.

## Summary

Products Web App is a focused inventory management application that demonstrates practical React development, API integration, and form-driven business logic in a clean and approachable project. It is designed to be easy to understand, visually structured, and technically credible for both developers and recruiters.

## Author

Built by Arachdan.
