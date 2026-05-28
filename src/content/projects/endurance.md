---
title: "Endurance"
shortDescription: "Privacy-first wellbeing & support platform for veterans, with fully custom end-to-end encryption."
description: "Team project for The Lab (KdG). A Flutter mobile app for veterans, a Vue web portal for their support network and a Go backend stack with DDD bounded contexts, stress scoring from wearables and Keycloak-based identity - built around a fully custom AES-256-GCM envelope-encryption layer with per-user data keys, so that sensitive health, journal and profile data is never stored in plaintext."
pubDate: "2026-05-28"
heroImage: "../../assets/endurance.png"
techStack:
  - Flutter
  - Dart
  - Vue 3
  - TypeScript
  - Tailwind CSS
  - Go
  - PostgreSQL
  - Keycloak
  - Firebase
  - WebSockets
  - Docker
repoUrl: "https://github.com/Coupeke1/endurance"
role: "Backend Developer (Go) - encryption & algorithm"
features:
  - "Fully custom AES-256-GCM envelope encryption with per-user data keys"
  - "Privacy-first model: granular sharing rules per supporter and per resource"
  - "Flutter mobile app for veterans with wearable health integration"
  - "Vue 3 web portal for the personal support network"
  - "DDD Go backend with bounded contexts and encrypted-at-rest data"
  - "Stress scoring algorithm service consuming wearable samples"
  - "Real-time chat & push notifications (WebSocket + Firebase)"
  - "Calendar with bookable support slots + iCal export"
year: 2026
featured: true
translations:
  nl:
    title: "Endurance"
    shortDescription: "Privacy-first welzijns- & ondersteuningsplatform voor veteranen, met volledig custom end-to-end encryptie."
    description: "Teamproject voor The Lab (KdG). Een Flutter mobiele app voor veteranen, een Vue webportaal voor hun ondersteuningsnetwerk en een Go backendstack met DDD bounded contexts, stress-scoring uit wearables en Keycloak-identiteitsbeheer - gebouwd rond een volledig zelfgeschreven AES-256-GCM envelope-encryptielaag met aparte data-sleutels per gebruiker, zodat gevoelige health-, journal- en profieldata nooit als plaintext opgeslagen worden."
    role: "Backend developer (Go) - encryptie & algoritme"
    features:
      - "Volledig custom AES-256-GCM envelope-encryptie met aparte data-sleutel per gebruiker"
      - "Privacy-first model: fijnmazige sharing-regels per supporter en per resource"
      - "Flutter mobiele app voor veteranen met wearable health integratie"
      - "Vue 3 webportaal voor het persoonlijke ondersteuningsnetwerk"
      - "DDD Go backend met bounded contexts en data versleuteld at rest"
      - "Stress-scoring algorithm service op basis van wearable samples"
      - "Real-time chat & push notificaties (WebSocket + Firebase)"
      - "Agenda met boekbare support-slots + iCal export"
---

## Project Context

Endurance is a team project for **The Lab 2026** at Karel de Grote Hogeschool, where student teams build a full product end-to-end over the course of a semester. Our team - *26 - De Uitgeruste IT-ers* - designed and built a **digital platform that helps veterans access mental health resources and stay connected with their support network**, with privacy as the non-negotiable design constraint.

I owned the **Go backend and the core stress-scoring algorithm**, including the custom envelope-encryption layer and the ABAC authorization system. Lee built the Flutter mobile app; Kaj built the Vue web portal. The architecture, data flows and contracts were designed together.

Full project showcase, research article and conference slides: [endurance.niceduck.dev](https://endurance.niceduck.dev/).

## Collaborators

**Lee Coppens** - Mobile App Developer (Flutter) · [leeco.dev](https://leeco.dev/)  
**Kaj Botty** - Web App Developer (Vue.js) · [niceduck.dev](https://niceduck.dev/)  
**Mathias Meeus** - Backend Developer (Go) · core algorithm & encryption

## Problem Space

Veterans returning from service often deal with chronic stress, sleep issues and the slow build-up of mental load. They also have a strong historical reason to be careful about who sees their health data - and that suspicion is often what keeps them from seeking help in the first place. Existing wellness apps tend to be either generic (just a mood tracker) or therapeutic (clinical apps locked behind a care provider). What was missing was something in between: a tool the veteran controls, that quietly observes physiology through a wearable, lets them reflect through a daily survey and journaling, and - when they choose to - opens a window for therapists and the people they trust to step in early.

The constraint that shaped every other decision was simple: veterans had to retain **100% control over their sensitive data**. That meant designing a zero-trust environment where the platform itself can't read what the user hasn't chosen to share - even from the database side.

## System Design

The platform is split into independent services that each own their domain.

### Mobile app - for the veteran (Flutter, by Lee)

The Flutter app is the primary surface for the veteran. It pairs with the device's smartwatch / health platform (Google Health / Apple Health) to read heart-rate and HRV samples, sends those to the backend, and surfaces the daily check-in survey, journaling, calendar appointments and direct chat with therapists and supporters. Auth runs over OAuth2/OIDC through Keycloak using `flutter_appauth`, with tokens stored in secure storage. State is managed with **GetX**, navigation with **GoRouter**, and real-time updates flow over a persistent WebSocket. Route guards enforce the **veteran role** for the main features.

### Web portal - for the support network (Vue 3, by Kaj)

The Vue 3 portal is where supporters - therapists, family, friends - act. It lets them book support-slots in a veteran's calendar, chat in real time, view shared resources (survey results, stress scores, journals) strictly within what the veteran has explicitly shared, and respond to invites. Built with Pinia, Vue Router, Tailwind 4, Chart.js for trend visualisations and `v-calendar` for slot management.

### Go backend - DDD bounded contexts (mine)

The core API is a Go service built around **bounded contexts**: `users`, `support`, `authorization`, `calendar`, `chats`, `mood`, `stress`, `journal`, `encryption`, `export` and `ws`. Each context follows the same internal layout (`domain` / `application` / `infrastructure` / `transport`), keeping HTTP, database and business logic cleanly separated. Auth is JWT-based against Keycloak, and an ABAC layer evaluates per-resource sharing rules on every cross-user read.

We picked **Go** specifically because it gives us high performance *and* robust **native cryptography** in the standard library - which is exactly what a custom encryption layer needs underneath it.

### Stress algorithm service (mine, in Go)

A separate Go service consumes the raw heart-rate / HRV samples coming in from the wearable, smooths them, and computes a normalised **stress score** that the supporters' dashboard and the veteran's home screen render. Keeping the algorithm out of the main API means we can iterate on the scoring model independently and shield the user-facing service from heavy computations.

### Identity & deployment

**Keycloak** is the single identity provider for the mobile app, the web portal and all backend services, with separate clients for the mobile (native OIDC) and web flows. The whole stack - PostgreSQL, Keycloak's own PostgreSQL, the IdP itself, and HTTPS certs generated by scripted PowerShell/bash - runs locally through **Docker Compose**, and each service has a `justfile` for consistent local commands.

## Privacy & Encryption

Privacy wasn't an afterthought on Endurance - it was the design constraint that shaped everything else. The data we collect (survey responses, stress samples derived from heart-rate, journal pages, addresses, phone numbers) is among the most sensitive a person can produce. The promise we made to the veteran is concrete: **100% control over their sensitive data**, in a **zero-trust environment** where nobody - not other users, not supporters, not even an attacker with full read access to the database - sees more than what they have explicitly been granted.

Two layers carry that promise: **a fully custom encryption pipeline** for the data itself, and an **ABAC (Attribute-Based Access Control)** layer for who can ever ask to decrypt it.

### Custom AES-256-GCM envelope encryption

There is no off-the-shelf library doing the heavy lifting here. The `encryption` bounded context inside the Go backend implements a complete **envelope encryption** scheme from scratch on top of Go's standard `crypto/aes` and `crypto/cipher`:

- **Per-user data keys.** Every user gets their own 32-byte (AES-256) data key, generated from `crypto/rand` at registration time. One user's key is independent from every other user's - a compromise of one DEK never extends to anyone else.
- **Master-key wrapping.** Each user data key is itself encrypted with a **master key** held only in the backend's environment before being stored. The database never sees a plaintext data key; the master key never sees the database.
- **AES-256-GCM with random nonces.** Both the wrapping and the per-field encryption use AES-GCM - authenticated encryption that also detects tampering - with a fresh random nonce prepended to every ciphertext.
- **SHA-256 hashes for equality lookups.** Fields that need to be searchable (e.g. username) are stored as normalised SHA-256 hashes alongside the ciphertext, so we can resolve a user without ever decrypting a column.

Sensitive personal fields - names, addresses, phone numbers, survey responses, journal content and more - pass through this pipeline in the `application` layer of each bounded context before they ever reach PostgreSQL. The database physically does not hold a readable copy.

### Attribute-Based Access Control (ABAC)

On top of encryption, an **ABAC** layer decides whether a given user is even allowed to ask for a given resource - based on attributes of *who* is asking, *what* they are asking for, and *which sharing rules* the data owner has set. A veteran can mark a *resource* (survey responses, stress scores, calendar, journal, profile) as **public to my network**, **shared via rules**, or **private**, and **per-supporter rules** further narrow what individual supporters see. Every request that touches another user's data passes through a middleware chain that:

1. Resolves the target user from the path or username,
2. Verifies the requester has an *accepted* support relationship with the target,
3. Evaluates the active sharing rule for the requested resource,
4. Only then dispatches to the handler - which, in turn, decrypts on the way out.

This pushes authorization out of business code and makes it impossible to expose a new endpoint without consciously wiring the rules.

## Real-Time & Notifications

Notifications run on two channels. **Firebase Cloud Messaging** delivers push to the mobile app even when it is closed (e.g. when a supporter accepts an invite or a chat message arrives). **WebSocket** delivers in-session updates to both clients, multiplexed through a small WebSocket manager that the chat and notification subsystems publish to. The mobile and web clients subscribe and update reactive state without page reloads.

## Reflections

The biggest payoff was committing to **DDD bounded contexts early**. With multiple people working in parallel across two clients and two Go services, having sharp domain boundaries meant that touching `mood` couldn't break `calendar`, and a teammate could read one context end-to-end without holding the whole system in their head.

Writing the **encryption layer ourselves** instead of leaning on a third-party black box was deliberate: we wanted to know exactly which bytes left the application unencrypted and which didn't, and we wanted per-user key isolation. It also turned out to be more invasive than expected - once data is encrypted at rest you can no longer query, filter or aggregate on those columns, which forced us to be deliberate about which fields really need protection and to push search/filter responsibilities up into the application layer (with hashed indexes for the equality lookups that genuinely couldn't move).

Building two distinct clients (mobile *and* web) for the same backend also tested our API contracts: it surfaced assumptions we'd quietly made for one platform that didn't hold for the other (e.g. background sync on mobile vs. interactive flows on web), and pushed us toward smaller, more orthogonal endpoints.
