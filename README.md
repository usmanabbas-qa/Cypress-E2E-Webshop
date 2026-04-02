# 🛒 Cypress Automation — Demo Web Shop

> Professional End-to-End (E2E) Automation Testing project using **Cypress** and **Page Object Model (POM)** design pattern for the Demo Web Shop e-commerce platform.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

---

## 📌 Project Overview

This project demonstrates a complete E2E test automation suite built with Cypress for an e-commerce web application. It follows the **Page Object Model (POM)** design pattern to ensure clean, maintainable, and scalable test code.

### 🌐 Application Under Test
**Demo Web Shop** — [https://demowebshop.tricentis.com](https://demowebshop.tricentis.com)

---

## ✅ Test Coverage

| Module | Test Scenarios |
|--------|---------------|
| 🔐 Authentication | Login, Logout, Registration |
| 🛍️ Product Catalog | Search, Filter, Product Details |
| 🛒 Shopping Cart | Add, Remove, Update Quantity |
| 💳 Checkout Flow | Address, Shipping, Payment |
| 👤 User Account | Profile, Order History |

---

## 🏗️ Project Structure

```
Cypress-Automation-DemoWebShop/
│
├── cypress/
│   ├── e2e/                    # Test spec files
│   │   ├── auth.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── pages/                  # Page Object Model classes
│   │   ├── LoginPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   ├── fixtures/               # Test data files
│   │   └── testData.json
│   │
│   └── support/                # Custom commands & config
│       └── commands.js
│
├── cypress.config.js           # Cypress configuration
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **Test Framework:** Cypress
- **Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Cypress Mochawesome Reporter
- **CI/CD:** GitHub Actions

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/usmanabbas-qa/Cypress-Automation-DemoWebShop.git
cd Cypress-Automation-DemoWebShop
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests in headed mode (with browser)
```bash
npx cypress open
```

### 4. Run tests in headless mode
```bash
npx cypress run
```

### 5. Run specific test file
```bash
npx cypress run --spec "cypress/e2e/auth.cy.js"
```

---

## 📊 Sample Test Case

```javascript
// Login Test — Page Object Model
describe('User Authentication', () => {
  it('should login with valid credentials', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.enterEmail('test@example.com');
    loginPage.enterPassword('password123');
    loginPage.clickLogin();
    cy.url().should('include', '/dashboard');
  });
});
```

---

## 🤝 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-usmanabbas--qa-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/usmanabbas-qa)
[![Gmail](https://img.shields.io/badge/Gmail-usmanabbas7400@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:usmanabbas7400@gmail.com)

---

⭐ **If you found this project helpful, please give it a star!**
