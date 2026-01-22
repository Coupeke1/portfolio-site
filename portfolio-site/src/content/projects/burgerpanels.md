---
title: "BurgerPanels.org"
shortDescription: "Website that helps organize citizen panels."
description: "BurgerPanels.org is a web app for organizations to organize citizen panels, including configurable questionnaires, breakpoint answers and suggestions."
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
  - "Dynamic questionnaires (admin-configurable)"
  - "Breakpoint logic with suggestions"
  - "Razor views + API endpoints (no [FromBody])"
  - "Export & reporting"
repoUrl: "https://github.com/Coupeke1/burgerpanels.org"
liveUrl: "https://burgerpanels.org"
year: 2024
featured: true
---

## About the project

BurgerPanels.org is a web application that allows organizations to **set up, manage and analyze citizen panels**.  
The core consists of dynamically configurable **questionnaires**, breakpoints that determine logic, and automatic **suggestions** based on answers.

## Architecture & Features

- **.NET Framework backend** with Razor Views + API endpoints
- **Admin-configurable questionnaires** (fields, types, validation)
- **Breakpoint logic** that determines follow-up questions and suggestions
- **Front-end in TypeScript + Vite + Tailwind CSS**
- **Docker setup** for consistent deployments
- **Export & reporting** for results

## Technical challenges

- Validation of dynamic forms (server-side + client-side)
- Performant rendering of large questionnaires
- Fault-tolerant breakpoint logic that handles inconsistencies
- Separation of Razor Views ↔ API without `[FromBody]` dependency

## Result

A stable, extensible and user-friendly tool that helps organizations efficiently organize and analyze citizen panels.
