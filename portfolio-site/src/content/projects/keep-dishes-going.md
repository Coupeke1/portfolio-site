---
title: "Keep Dishes Going"
shortDescription: "DDD-driven microservices platform for restaurants, orders and deliveries."
description: "Distribution system with autonomous services for Restaurant, Order and Delivery, connected via RabbitMQ events and per-service databases."
pubDate: "2025-01-15"
heroImage: "../../assets/keepdishesgoing-header.png"
techStack:
  - Java 21
  - Spring Boot
  - Domain-Driven Design
  - RabbitMQ
  - PostgreSQL
  - Keycloak
role: "Fullstack Developer / Architect"
features:
  - "Separated bounded contexts"
  - "Event-driven integration"
  - "Own database schema per service"
repoUrl: "https://github.com/Coupeke1/keep-dishes-going"
year: 2025
---

## About the project

Keep Dishes Going is a **DDD microservices platform** where Restaurant, Order and Delivery services operate autonomously and communicate via **RabbitMQ domain events**. Each service owns its own database and follows a strict domain model.

---

## Key components

### Restaurant Service

* Manages restaurants, menus and availability.

### Order Service

* Processes orders and publishes events like *OrderPlaced*.
* Has a very basic **TypeScript front-end** since this was not a requirement for this project.

### Delivery Service

* Route management for drivers + event consumption.

### Messaging

* All services interact asynchronously via RabbitMQ.

---

## Result

A clearly structured, scalable and maintainable platform that combines strong **domain architecture** with modern **event-driven microservices**.
