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
repoUrl: "https://github.com/Coupeke1/moko-games"
year: 2025
featured: true
translations:
  nl:
    title: "Moko Games"
    shortDescription: "DDD-gedreven microservicesplatform om digitale bordspellen te kopen, spelen en sociaal te delen."
    description: "Vakproject (Integratieproject 3) gebouwd in cross-functionele teams. We ontwierpen en bouwden een DDD-microservicesplatform waar gebruikers digitale bordspellen kunnen kopen, spelen met vrienden (of AI), en sociale + chat-features in één platform gebruiken."
    role: "Fullstack developer / architect"
    features:
      - "Winkel & bibliotheekbeheer"
      - "Profielen, vrienden & sociale features"
      - "Real-time lobby, chat & notificaties"
      - "Multiplayer + AI-tegenstanders"
      - "AI chatbot integratie"
---

## Project Context

Moko Games emerged from Integration Project 3, a course designed to simulate real-world cross-functional product development. Our task: design and build a comprehensive digital board game platform where commerce, social features, and real-time gameplay converge in a single ecosystem. The constraint that made it interesting? Our development team collaborated with separate AI and DevOps teams, mirroring how engineering organizations coordinate across specializations.

I contributed primarily to backend development-designing service boundaries, implementing event-driven workflows, and building the RabbitMQ infrastructure that powers async features.


## Collaborators

**Lee** - https://leeco.dev/  
**Kaj** - https://niceduck.dev/  
**Matti** - Fullstack Developer  
and **Kevin** was our contact person for our DevOps team.


## Problem Space

Digital board game enthusiasts face a fragmented ecosystem. Purchasing happens on storefronts like Steam. Social coordination happens on Discord. Gameplay happens in standalone clients. Each transition breaks immersion and creates friction.

We wanted to collapse these silos into a cohesive experience: discover a game, buy it, invite friends, launch a lobby, and play-without context-switching between platforms. The technical challenge was building this unified experience while maintaining service independence and allowing concurrent development across teams.


## System Design

### Domain Boundaries

We split the platform into multiple microservices each divided by it's own bounded context. The core platform services handle users (profiles, library, achievements), social (friends, requests), store (catalog, orders), sessions (lobbies, invites), communication (chat, notifications), and games (registry, settings validation). Then we have two game services (Tic Tac Toe and Checkers) and two infrastructure pieces (the WebSocket gateway and the game ACL).

Each service owns its domain model, database, and business logic. They expose REST APIs for queries and commands, and publish events to RabbitMQ for async integration with other services.

### Asynchronous Messaging

RabbitMQ topic exchanges connect the services. When something happens-a purchase completes, someone sends a friend request, a lobby starts, an achievement unlocks-the service publishes an event. Other services subscribe to the events they care about and process them independently.

Here's a typical flow: user buys a game → store service publishes `GamesPurchasedEvent` → user service picks it up and adds the game to the player's library. The store service doesn't know or care that the user service exists. Same pattern everywhere: friend requests trigger notifications, lobby updates go to WebSocket clients, achievements generate alerts.

### Identity Management

Keycloak handles authentication and issues JWTs. Each backend service validates tokens and pulls out the user ID from the claims. This keeps all the identity logic in one place while letting services make their own authorization decisions.

### Real-Time Architecture

Instead of putting WebSocket code in every service, we built a gateway. Clients connect to it using STOMP over SockJS. When someone subscribes to lobby updates, the gateway publishes a subscription event to RabbitMQ. The session service sees it and pushes the current lobby state back through a user-directed exchange. The gateway picks that up and forwards it to the client.

This split connection management (gateway's responsibility) from business logic (services' responsibility). Services just publish to RabbitMQ when state changes and don't worry about WebSocket details.

### Deployment Strategy

Everything runs in Docker containers. For local dev, we use Docker Compose to spin up PostgreSQL, RabbitMQ, Keycloak, and most of the backend services. We keep one or two services running locally (on the host JVM) for testing new features
And we have a seperate docker image for our devops team to deploy to Kubernetes.

## Frontend Implementation

We built three React apps: the main platform and two game-specific UIs for Tic Tac Toe and Checkers. All three use Vite for fast dev builds and hot reloading. The stack is consistent across frontends: Tailwind for styling, Zustand for client state, TanStack Query for server state and caching, and Keycloak JS for handling login flows and token refresh.

We organized code by feature instead of by type. Each feature (store, library, friends, lobby, chat, profiles) gets its own directory with components, hooks, API clients, and types all in one place. This made it easier for multiple people to work without stepping on each other's toes.

For real-time stuff, we use STOMP over SockJS to connect to the WebSocket gateway. The client subscribes to topics (lobbies, chat channels, notifications) and updates Zustand stores when messages come in. We added reconnection logic so if the network hiccups, it automatically reconnects and resubscribes.


## Development Practices

We focused testing on the backend: JUnit 5 for unit tests, Mockito for mocking. Domain logic, command handlers, query handlers, event publishers-all tested. We didn't hit 100% coverage, but the critical paths (purchases, friend requests, lobby lifecycle) were well covered.

Running everything locally was a pain. Ten services, three databases, RabbitMQ, Keycloak it adds up fast. We containerized most services and only ran the one we were actively working on in the IDE. This cut our memory usage way down.


## Reflections

Enforcing service boundaries early saved us from a lot of pain later. We used our rules from previous assignments: no direct database access between services, no shared domain libraries. Every interaction goes through APIs or events. This forced us to think harder about contracts and backward compatibility, but it meant we could change internal implementations without breaking other functionality..

The real-time features were harder than expected. WebSocket connections drop, messages can arrive out of order, and clients need to handle reconnections gracefully. We ended up treating WebSocket updates as optimistic hints rather than the source of truth. When a client reconnects or mounts a component, it still fetches current state from REST endpoints to avoid displaying stale data.

Debugging distributed flows taught us to be paranoid about logging. When a purchase doesn't show up in someone's library, you need to trace the event through multiple services. We standardized on logging correlation IDs, routing keys, and event types at every hop. Without that, tracking down where an event got dropped or misprocessed would have been nearly impossible.

We built Tic Tac Toe first specifically because it's simple-minimal rules, small state, quick games. That let us validate the entire flow: create lobby, invite friend, configure settings, start game, unlock achievement, send notification. By the time we moved to Checkers and Chess, the infrastructure was proven and we were just adding game logic.


## Demo & screenshots

### Demo video

<iframe width="100%" height="420" src="https://www.youtube-nocookie.com/embed/cTVb87V25zY" title="Moko Games demo" style="border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

![Store page](../../assets/moko/moko-store.png)  
![Friends page](../../assets/moko/moko-friends.png)  
![Tic Tac Toe](../../assets/moko/moko-game-view.png)