---
title: "Domotica Control Center"
shortDescription: "Smart home management app with scenes, live controls, floorplan and real-time logging."
description: "A modern home automation interface built in React + TypeScript that allows users to manage their smart home through dynamic scenes, direct controls, a visual floorplan view and real-time logging."
pubDate: "2024-11-15"
updatedDate: "2025-02-01"
heroImage: "../../assets/domotica-header.png"
liveUrl: "https://domotica-control-center.com"
techStack:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite
  - ShadCN UI
  - Zustand
  - React Query
  - Docker
role: "Fullstack developer / architect"
features:
  - "Scene builder with triggers and actions"
  - "Live device controls"
  - "Visual floorplan management view"
  - "Real-time activity & event logging"
  - "High-performance UI with Zustand + React Query"
repoUrl: "https://github.com/Coupeke1/domotica-app"
year: 2025
featured: true
translations:
  nl:
    title: "Domotica Control Center"
    shortDescription: "Slimme woningbeheerapp met scenes, live controls, floorplan en real-time logging."
    description: "Een moderne domotica-interface gebouwd in React + TypeScript waarmee gebruikers hun slimme woning beheren via dynamische scenes, directe controls, een visuele floorplan-weergave en real-time logging."
    role: "Fullstack developer / architect"
    features:
      - "Scene-builder met triggers en acties"
      - "Live device controls"
      - "Visuele floorplan beheerweergave"
      - "Real-time activity & event logging"
      - "Zeer performante UI met Zustand + React Query"
---

## About the project

The **Domotica Control Center** application is a comprehensive front-end solution for managing a smart home.  
Users can **create scenes**, control devices in **real-time**, view their home via an **interactive floorplan**, and
track all activity through **logging dashboards**.

The app is fully built in **React + TypeScript**, with a strong focus on **performance**, **usability** and **reusable
UI components**.

## Architecture & Features

- **React + TypeScript** front-end, optimized for speed
- **Zustand state management** → super lightweight global state
- **React Query** for data fetching + caching
- **Scene Builder**  
  Configure logical flows: triggers, actions, delays, conditions
- **Device Controls**  
  Live switches, sliders, thermostats, dimmers, etc.
- **Floorplan Module**  
  Drag-and-drop layout view of rooms & devices
- **Real-time Logging**  
  Activity per device, scene events, system health
- **Tailwind + ShadCN UI** for a modern, consistent interface
- **Docker-ready** for easy deployment

## Technical challenges

- **Keeping real-time updates performant** with caching & optimistic updates
- **Making complex scenes visually configurable** via dynamic schemas
- **Splitting state management** between global UI state, device state and API state
- **Making floor plan rendering performant** (SVG + drag interactions)
- **Separate logging pipelines** for UI events, device events and scene events

## Result

A **professional**, **scalable** and **fast home automation interface** that offers all functionality in one platform to
fully manage a smart home - from daily operation to advanced automation.
