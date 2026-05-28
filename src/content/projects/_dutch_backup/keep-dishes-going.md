---
title: "Keep Dishes Going"
shortDescription: "DDD‑gedreven microservicesplatform voor restaurants, bestellingen en leveringen."
description: "Distributiesysteem met autonome services voor Restaurant, Order en Delivery, gekoppeld via RabbitMQ‑events en per‑service databanken."
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
  - "Gescheiden bounded contexts"
  - "Event-driven integratie"
  - "Eigen databank-schema per service"
repoUrl: "https://github.com/Coupeke1/keep-dishes-going"
year: 2025
---

## Over het project

Keep Dishes Going is een **DDD‑microservicesplatform** waarin Restaurant-, Order- en Delivery-services autonoom werken
en communiceren via **RabbitMQ-domeinevents**. Elke service bezit zijn eigen databank en volgt een strikt domeinmodel.

---

## Belangrijkste onderdelen

### Restaurant Service

* Beheert restaurants, menukaarten en beschikbaarheden.

### Order Service

* Verwerkt orders en publiceert events zoals *OrderPlaced*.
* Heeft hele basic **typescript front-end** aangezien dit geen vereiste was voor dit project.

### Delivery Service

* Routebeheer voor drivers + eventconsumptie.

### Messaging

* Alle services interageren asynchroon via RabbitMQ.

---

## Resultaat

Een helder gestructureerd, schaalbaar en onderhoudbaar platform dat sterke **domeinarchitectuur** combineert met moderne
**event‑driven microservices**.
