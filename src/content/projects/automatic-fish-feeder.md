---
title: "Automatic Fish Feeder"
shortDescription: "Embedded MicroPython system that automatically feeds fish at scheduled times."
description: "Compact embedded project with ESP32, MicroPython, RTC timing and servo control. Designed to feed completely autonomously with both manual and remote configuration."
pubDate: "2023-11-15"
heroImage: "../../assets/fish-feeder-header.png"
techStack:
  - MicroPython
  - ESP32
  - DS1307 RTC
  - PWM Servo Control
  - I2C
role: "Embedded & Firmware Development"
features:
  - "Automatic feeding via real-time clock"
  - "18 programmable feeding times"
  - "Manual feeding button with debouncing"
  - "Remote configuration via TCP"
repoUrl: "https://github.com/Coupeke1/fish-feeder-micropython"
year: 2025
translations:
  nl:
    title: "Automatische visvoeder"
    shortDescription: "Embedded MicroPython-systeem dat vissen automatisch voedt op ingestelde tijdstippen."
    description: "Compact embedded project met ESP32, MicroPython, RTC-timing en servo-aansturing. Ontworpen om volledig autonoom te voeren met zowel handmatige als remote configuratie."
    role: "Embedded & Firmware Development"
    features:
      - "Automatische voeding via realtime klok"
      - "18 programmeerbare voedingstijden"
      - "Handmatige feeding-knop met debouncing"
      - "Remote configuratie via TCP"
---

## About the project

The automatic fish feeder is a compact embedded system that uses an **ESP32 with MicroPython** to feed fish at fixed
times.  
The **DS1307 RTC** stores all feeding times persistently and a **continuous-rotation servo** dispenses food precisely.

This project demonstrates experience with **embedded software**, **hardware control**, **threading**, and **lightweight
network communication**.

---

## Key components

### Time-controlled feeding

- 18 configurable time slots
- Persistently stored in RTC-NVRAM
- Works without Wi-Fi dependency

### Servo control

- PWM-controlled continuous-rotation servo
- Separate thread for timing
- Reliable behavior during network activity

### Manual operation

- Physical button (with debouncing)
- Immediate feeding, even without network

### Network features

- Small TCP protocol for remote configuration
- Reading and setting via a client
- Automatic NTP sync (with failsafe logic)

---

## Result

An autonomous, reliable and easily configurable system that precisely executes feeding times — ideal as a demonstration
of **firmware development**, **low-level hardware**, and **embedded architecture**.
