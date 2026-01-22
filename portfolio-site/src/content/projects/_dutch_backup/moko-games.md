---
title: "Moko Games"
shortDescription: "DDD-gedreven microservices to manage your games"
description: "This project was an assignment of the Integration Project 3 course. All students were split up based on their major (Developers, AI and Deployment / DevOps). This meant that we had to communicate with external teams for the first time during our Bachelor’s Degree. Our goal was to create a platform where users could buy digital board games, play them with friends, and build a community without jumping between different services."
pubDate: "2025-12-20"
heroImage: "../../assets/moko-header.png"
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
  - "Store & Library Management"
  - "Social Features"
  - "Multiplayer Features"
  - "Chat functionality"
  - "AI-player integration"
  - "AI-chatbot integration"
repoUrl: "https://github.com/Coupeke1/keep-dishes-going"
year: 2025
---

## Over het project

Dit project was een opdracht voor de Integration Project 3 cursus. Studenten werden ingedeeld op basis van hun major (Developers, AI en Deployment / DevOps). Dit betekende dat we voor het eerst tijdens onze bachelor met externe teams moesten samenwerken.

Ons doel was een platform te bouwen waar gebruikers digitale bordspellen kunnen kopen, samen kunnen spelen en een community opbouwen zonder tussen verschillende diensten te hoeven schakelen.

---

## Core Features

- Store & Library Management  
  - Bladeren en aankopen (integratie met een betaaldienst) voor digitale bordspellen en beheer van je persoonlijke bibliotheek.
- Social Features  
  - Profielbeheer (achievements, favourieten, statistieken) en vriendconnecties.
- Multiplayer Features  
  - Lobby-creatie en uitnodigingen + spelen met vrienden of tegen een AI.
- Communication  
  - Chat met vrienden of met een AI voor platforminformatie + chat tijdens lobby of spel + notificaties.
- Games  
  - Tic Tac Toe, Checkers en een externe Chess-prototype met een vertaallaag.

---

## Architecture

We kozen voor een microservices-architectuur vanwege de complexiteit en schaal van Moko. Voordelen:
- Onafhankelijke ontwikkeling (parallelle teams).
- Schaalbaarheid (horizontale schaal voor specifieke services).
- Duidelijke domeinafbakening en losse koppeling via events.

We maakten een gedetailleerd plan van de verschillende microservices en hun communicatiepatronen. Alle real-time features (Lobby, Chat en Notifications) zijn geïmplementeerd met WebSockets in plaats van polling. Hiervoor gebruikten we een gateway-service die berichten door het platform routet.

---

## Frontend

De frontend is geschreven in React met Tailwind, Zustand en Axios. We zijn begonnen met ontwerpen in Figma en daarna componentgedreven gaan bouwen. Belangrijke principes:
- User-centric navigation
- Consistent design en visuele taal
- Responsive en modern design

Projectstructuur (package-by-feature) en een custom component library. Data fetching en UI-state zijn gescheiden per service.

Voorbeeld van de mappenstructuur:
- src/app.tsx
- src/components/...
- src/features/... (cart, chat, checkout, friends, games, library, lobby, notifications, profiles, store)
- src/lib (api-client, socket-client, etc.)

---

## Testing en Local Development

We bereikten ~90% testcoverage met unit- en integratietests. Lokale ontwikkeling met alle microservices was resource-intensief (veel JVM's/IDE's). Oplossing: een lokale Docker-omgeving voor development waarmee bijna alle backend-services via host.docker.internal konden draaien — aanzienlijk minder geheugenverbruik dan alle services in IDEs.

---

## Conclusie

- Microservices waren de juiste keuze voor dit project.
- Vroeg specificeren van het ontwerp gaf een voorsprong voor backend en frontend.
- Communicatie met externe teams (AI, DevOps) kan nog verbeteren.
- Docker is essentieel voor dergelijke architecturen.
- Tutors waardeerden de nette codeconventies, architectuurbeslissingen en de clean code.

---

## Pssst

Wanneer een gebruiker een nieuw profiel aanmaakt, krijgt deze automatisch een willekeurige profielfoto van een externe API. Klik hier voor meer informatie.

---

## Showcase

Je kunt de demo-video bekijken voor een showcase van het platform.

- Store Page — toont Tic Tac Toe en Checkers
- Friends Page — vriendenlijst en profielafbeeldingen
- Tic Tac Toe — spelen tegen andere gebruikers
