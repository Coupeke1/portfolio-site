---
title: "F1 Management App"
shortDescription: "Android app for managing Formula 1 teams and drivers."
description: "Modern Android app built with Jetpack Compose, MVVM, Hilt, DataStore and a custom API. Users can view, create, edit and delete teams and drivers."
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
  - "CRUD for teams and drivers"
  - "MVVM architecture with Repository layer"
  - "Hilt dependency injection"
  - "Compose UI + responsive layouts"
  - "Settings via DataStore (auto-landscape, sponsors toggle)"
  - "Team and driver management with dialogs"
repoUrl: "https://github.com/Coupeke1/android-F1-project"
year: 2024
---

## About the project

This app is an **F1 team management application** built with modern Android technologies like **Jetpack Compose**, **MVVM**, **StateFlow**, **Hilt DI** and **Navigation Compose**. Users can manage Formula 1 teams and drivers, with functionality for creating, updating, deleting and navigating between teams.

The application uses a **repository + API service** structure for data retrieval and uses **DataStore** for user settings. Thanks to Compose, the UI is fully declarative and responsive.

## Architecture & Features

* **MVVM + StateFlow** for predictable state management
* **Repository pattern** on top of an API service
* **Teams & Drivers CRUD** including dialogs for editing
* **Navigation Compose** with three main routes: *Teams*, *Drivers*, *Settings*
* **Hilt** for dependency injection throughout ViewModels, Repository and DataStore
* **DataStore Preferences** for settings like auto-landscape and showing sponsors
* **Jetpack Compose UI** with Cards, Dialogs, NavigationBar, AsyncImage and more

## User Interface

* **Team Viewer** with logo, statistics and driver count
* **Driver Viewer** with swipe/button-controlled navigation
* **Settings screen** with toggles for UI options
* **Dark/light theming** via AppTheme

## Result

A modern, scalable and well-organized Android application that demonstrates knowledge of **Compose**, **MVVM**, **Hilt**, **API integration**, **state management** and **UI/UX design**. Designed to be extended with real-time data or additional management features.
