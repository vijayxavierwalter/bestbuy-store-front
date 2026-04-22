# Best Buy Store Front

## Overview

The **Store Front** is the customer-facing web application for the Best Buy Cloud-Native Application.

It allows customers to:

* Browse products
* Add products to a cart
* Submit orders

This frontend communicates with:

* **product-service** to retrieve product data
* **order-service** to submit customer orders

---

## Features

* View all available products
* Add items to cart
* Remove items from cart
* Submit an order
* Display product information from the product-service API

---

## Tech Stack

* **Vue.js**
* **JavaScript**
* **Docker**
* **Nginx**

---

## Environment Variables

The application expects these environment variables:

```bash
VUE_APP_PRODUCT_SERVICE_URL=http://localhost:3002/
VUE_APP_ORDER_SERVICE_URL=http://localhost:3000/
```

---

## Running Locally

### Prerequisites

* Node.js
* npm

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm run serve
```

The app will run locally on:

```text
http://localhost:8080/
```

---

## Docker

### Build image

```bash
docker build -t yourdockerhub/bestbuy-store-front .
```

### Run container

```bash
docker run -p 8080:80 yourdockerhub/bestbuy-store-front
```

---

## Deployment

This service is:

* Containerized with Docker
* Deployed to **Azure Kubernetes Service (AKS)**
* Used as the customer-facing UI in the Best Buy microservices application

---

## Related Services

* **product-service** – Product catalog API
* **order-service** – Order submission API
* **store-admin** – Admin inventory interface
* **makeline-service** – Background order processing service

---

## Notes

This service was adapted from a lab starter project and customized for the Best Buy Cloud-Native Application final project.
