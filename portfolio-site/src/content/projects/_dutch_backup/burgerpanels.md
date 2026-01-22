---
title: "BurgerPanels.org"
shortDescription: "Website die helpt met het organiseren van burgerpanels."
description: "BurgerPanels.org is een webapp voor organisaties om burgerpanels te organiseren, inclusief configureerbare vragenlijsten, breekpunt-answers en suggesties."
pubDate: "2024-03-10"
updatedDate: "2025-02-01"
heroImage: "../../assets/burgerpanels-header.png"
techStack:
  - .NET Framework
  - Vite
  - TypeScript
  - Tailwind CSS
  - Docker
role: "Fullstack developer / architect"
features:
  - "Dynamische vragenlijsten (admin-configurable)"
  - "Breekpunt logica met suggesties"
  - "Razor views + API endpoints (geen [FromBody])"
  - "Export & reporting"
repoUrl: "https://github.com/Coupeke1/burgerpanels.org"
liveUrl: "https://burgerpanels.org"
year: 2024
featured: true
---

## Over het project

BurgerPanels.org is een webapplicatie waarmee organisaties **burgerpanels kunnen opzetten, beheren en analyseren**.  
De kern bestaat uit dynamisch configureerbare **vragenlijsten**, breekpunten die logica bepalen, en automatische *
*suggesties** op basis van antwoorden.

## Architectuur & Features

- **.NET Framework backend** met Razor Views + API endpoints
- **Admin-configurable vragenlijsten** (velden, types, validatie)
- **Breekpuntlogica** die vervolgvragen en suggesties bepaalt
- **Front-end in TypeScript + Vite + Tailwind CSS**
- **Docker setup** voor consistente deployments
- **Export & rapportage** voor resultaten

## Technische uitdagingen

- Validatie van dynamische formulieren (serverside + clientside)
- Performante rendering van grote vragenlijsten
- Fouttolerante breekpuntlogica die inconsistenties opvangt
- Scheiding Razor Views ↔ API zonder `[FromBody]` afhankelijkheid

## Resultaat

Een stabiele, uitbreidbare en gebruiksvriendelijke tool die organisaties helpt om burgerpanels efficiënt te organiseren
en analyseren.
