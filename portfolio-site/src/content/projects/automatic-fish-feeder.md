---
title: "Automatische visvoeder"
shortDescription: "Embedded MicroPython-systeem dat vissen automatisch voedt op ingestelde tijdstippen."
description: "Compact embedded project met ESP32, MicroPython, RTC-timing en servo-aansturing. Ontworpen om volledig autonoom te voeren met zowel handmatige als remote configuratie."
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
  - "Automatische voeding via realtime klok"
  - "18 programmeerbare voedingstijden"
  - "Handmatige feeding-knop met debouncing"
  - "Remote configuratie via TCP"
repoUrl: "https://github.com/Coupeke1/fish-feeder-micropython"
year: 2025
---

## Over het project

De automatische visvoeder is een compact embedded systeem dat een **ESP32 met MicroPython** gebruikt om vissen op vaste tijdstippen te voeren.  
De **DS1307 RTC** bewaart alle voedingstijden persistent en een **continuous-rotation servo** doseert het voedsel nauwkeurig.

Dit project demonstreert ervaring met **embedded software**, **hardware-aansturing**, **threading**, en **lichte netwerkcommunicatie**.

---

## Belangrijkste onderdelen

### Tijdgestuurde voeding
- 18 instelbare tijdslots
- Persistent opgeslagen in RTC-NVRAM
- Werkt zonder Wi-Fi afhankelijkheid

### Servo-aansturing
- PWM-gestuurde continuous-rotation servo
- Aparte thread voor timing
- Betrouwbaar gedrag tijdens netwerkactiviteit

### Handmatige bediening
- Fysieke knop (met debouncing)
- Onmiddellijke voeding, ook zonder netwerk

### Netwerkfuncties
- Klein TCP-protocol voor remote config
- Uitlezen en instellen via een client
- Automatische NTP-sync (met failsafe-logic)

---

## Resultaat
Een autonoom, betrouwbaar en eenvoudig configureerbaar systeem dat voedingstijden nauwkeurig uitvoert — ideaal als demonstratie van **firmware-ontwikkeling**, **low-level hardware**, en **embedded architectuur**.
