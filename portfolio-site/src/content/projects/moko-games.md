---
title: "Moko Games"
shortDescription: "DDD-driven microservices platform for buying, playing and socializing around digital board games."
description: "Course project (Integration Project 3) built in cross-discipline teams. We designed and implemented a DDD microservices platform where users can purchase digital board games, play with friends (or AI), and use social + chat features in one place."
pubDate: "2025-12-20"
heroImage: "../../assets/moko/moko-header.png"
techStack:
  - Java 21
  - Spring Boot
  - Domain-Driven Design
  - RabbitMQ
  - Microservices
  - PostgreSQL
  - Keycloak
  - React
  - Docker
  - Kubernetes
  - Websockets
role: "Fullstack Developer / Architect"
features:
  - "Store & Library management"
  - "Profiles, friends & social features"
  - "Real-time lobby, chat & notifications"
  - "Multiplayer + AI opponents"
  - "AI chatbot integration"
repoUrl: "https://github.com/Coupeke1/keep-dishes-going"
year: 2025
---

## About the project

**Moko Games** was built for *Integration Project 3*. For the first time in our bachelor program we worked in **separate majors** (Development, AI, and DevOps/Deployment) and had to coordinate across teams like a real product organization.

The goal was straightforward: build **one platform** where users can:

- buy digital board games,
- play them with friends (or against an AI),
- and interact through social features — without hopping between different services.

---

## What we built

### Store & Library

- A store where users can browse games, purchase them (payment integration), and manage a personal library.
- Clear separation between “store catalog” concerns and “owned library” concerns.

### Social & Community

- User profiles with stats/achievements and a friends system.
- A small fun touch: when a user creates a new profile, we automatically assign a **random profile picture** via **TheCatAPI**: https://thecatapi.com/

### Multiplayer & Real-time communication

- Real-time lobbies, invitations, chat and notifications.
- We used **WebSockets** for real-time features (instead of polling) and routed messages through a gateway.

### Games

- Playable **Tic Tac Toe** and **Checkers**.
- A **Chess prototype** integrated through a translation/adaptation layer.

---

## Architecture (high level)

We picked a **DDD + microservices** approach because the scope was too broad for a single codebase and we wanted multiple teams to work in parallel.

Key architectural ideas:

- **Bounded contexts** per domain area (store, profiles, lobby/chat, games, …)
- **Asynchronous integration via events** (RabbitMQ)
- **Security & identity** via Keycloak
- **Gateway for real-time** routing (WebSockets)

---

## Frontend

The frontend is built with **React + Tailwind**, and uses **Zustand** and **Axios** for state and data access.

We started with Figma designs and then implemented the UI **component-first**, keeping a consistent visual language.

Example structure (package-by-feature):

- `src/app.tsx`
- `src/components/...`
- `src/features/...` *(cart, chat, checkout, friends, games, library, lobby, notifications, profiles, store)*
- `src/lib/...` *(api-client, socket-client, etc.)*

---

## Testing & local development

We reached roughly **~90% test coverage** using unit + integration tests.

Running all services locally inside IDEs was heavy (lots of JVMs), so we set up a **Docker-based dev environment**. That allowed most services to run efficiently while still supporting local workflows.

---

## Lessons learned

- Microservices were a good fit **because multiple teams worked in parallel**.
- Specifying the design early accelerated both backend and frontend.
- Cross-team communication (especially with AI/DevOps) was the biggest growth area.
- Docker is essential once your architecture grows beyond a single service.

---

## Demo & screenshots

### Demo video

<iframe width="100%" height="420" src="https://www.youtube-nocookie.com/embed/cTVb87V25zY" title="Moko Games demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Store

![Store page](../../assets/moko/moko-store.png)

### Friends

![Friends page](../../assets/moko/moko-friends.png)

### Tic Tac Toe

![Tic Tac Toe](../../assets/moko/moko-tictactoe.png)
