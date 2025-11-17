---
title: "F1 Management App"
shortDescription: "Android app voor het beheren van Formule 1 teams en drivers."
description: "Moderne Android-app gebouwd met Jetpack Compose, MVVM, Hilt, DataStore en een eigen API. Gebruikers kunnen teams en drivers bekijken, aanmaken, bewerken en verwijderen."
pubDate: "2024-03-20"
heroImage: "../../assets/f1-app-header.png"
techStack:
  - Kotlin
  - Jetpack Compose
  - MVVM
  - Hilt (DI)
  - DataStore
  - Navigation Compose
  - Coil
role: "Android developer"
features:
  - "CRUD voor teams en drivers"
  - "MVVM-architectuur met Repository-laag"
  - "Hilt dependency injection"
  - "Compose UI + responsive layouts"
  - "Settings via DataStore (auto-landscape, sponsors toggle)"
  - "Team- en driver-management met dialogs"
repoUrl: "https://github.com/Coupeke1/android-F1-project"
year: 2024
---

## Over het project

Deze app is een **F1-team management applicatie** gebouwd met moderne Android-technologieën zoals **Jetpack Compose**, **MVVM**, **StateFlow**, **Hilt DI** en **Navigation Compose**. Gebruikers kunnen Formule 1 teams en drivers beheren, met functionaliteit voor het aanmaken, updaten, verwijderen en navigeren tussen teams.

De applicatie maakt gebruik van een **repository + API-service** structuur voor data-opvraging en gebruikt **DataStore** voor gebruikersinstellingen. Dankzij Compose is de UI volledig declaratief en responsief.

## Architectuur & Features

* **MVVM + StateFlow** voor voorspelbare state management
* **Repository pattern** bovenop een API-service
* **Teams & Drivers CRUD** inclusief dialogs voor bewerking
* **Navigation Compose** met drie hoofdroutes: *Teams*, *Drivers*, *Settings*
* **Hilt** voor dependency injection doorheen ViewModels, Repository en DataStore
* **DataStore Preferences** voor instellingen zoals auto-landscape en sponsors tonen
* **Jetpack Compose UI** met Cards, Dialogs, NavigationBar, AsyncImage en meer

## User Interface

* **Team Viewer** met logo, statistieken en driver count
* **Driver Viewer** met swipe-/button-gestuurde navigatie
* **Instellingen scherm** met toggles voor UI-options
* **Dark/light theming** via AppTheme

## Resultaat

Een moderne, schaalbare en overzichtelijke Android-applicatie die aantoont dat je beschikt over kennis van **Compose**, **MVVM**, **Hilt**, **API-integratie**, **state management** en **UI/UX-ontwerp**. Ontworpen om uit te breiden met realtime data of extra management features.
