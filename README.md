
# Final Design Project – Admin Guide Tutorial  
**Yurtcu Networks – Realistic OSI Layer Problem Simulation and Resolution Guide**  

---

## 🎯 Objective

This tutorial document is part of a final design project focused on practical issues in computer networks, simulating problems and resolutions from the **Application (L7) to Physical Layer (L1)** of the OSI model.

The goal is to provide a **comprehensive admin guide** that network engineers or IT students can reference when encountering common network challenges. Each topic includes:
- A technical explanation of the problem
- A real or simulated solution
- Visual illustrations (via Packet Tracer and HTML)
- Preventive or reactive actions that can be taken by administrators

---

## 🗂️ Folder Structure

```
Network_Project/
├── index.html                # Main landing page with all scenario links
├── pkts/                     # Packet Tracer simulation files
│   ├── mac-spoofing.pkt
│   ├── port-conflict.pkt
│   ├── shielded-cable.pkt
│   ├── star-vs-flat.pkt
│   └── switch-loop.pkt
├── assets/                   # CSS/JS and supporting icons
├── images/                   # Screenshots, diagrams, and media
├── *.html                    # One HTML page per scenario
└── README.md                 # This document
```

---

## 📋 Topics Covered

| OSI Layer | Issue Identified                           | Simulation Available | HTML Description Page      |
|-----------|---------------------------------------------|----------------------|-----------------------------|
| L1        | EMI Interference vs STP/UTP Cable           | ✅ `shielded-cable.pkt` | `shielded-cable.html`     |
| L1        | Physical Fiber Cut / Damage Case            | ❌                    | `fiber-damage.html`        |
| L2        | Switch Loop - Broadcast Storm               | ✅ `switch-loop.pkt`  | `switch-loop.html`         |
| L2        | MAC Spoofing / IMEI Identity Hijack         | ✅ `mac-spoofing.pkt` | `imei-risk.html`           |
| L3        | DHCP IP Spoofing & ARP Poisoning            | ❌                    | `dhcp-spoof.html`          |
| L3-L4     | DNS Flood - DDoS Behavior and Filtering     | ❌                    | `ddos-router.html`         |
| L4        | Port Conflict between Local Services        | ✅ `port-conflict.pkt`| `port-conflict.html`       |
| L4        | TCP ACK Delay in Flat vs Star Topologies    | ✅ `star-vs-flat.pkt` | `topology.html`            |
| L5-L7     | Public Wi-Fi – Missing Encryption           | ❌                    | `wireless-encryption.html` |
| L7        | QUIC vs WebSocket: Live Stream Optimization | ❌                    | `stream-lag-quic.html`     |

---

## 🔧 Tools Used

- ✅ Cisco Packet Tracer v8.2+
- ✅ Bootstrap-based HTML templates
- ✅ Visual references from real-world network issues

---

## 📘 How to Use This Guide

- Open `index.html` in your browser to browse all scenarios.
- For simulations:
  - Download and open `.pkt` files in Cisco Packet Tracer.
  - Use Simulation Mode to analyze traffic behavior.
- Each HTML file contains visuals, explanations, and commands.

---

## 🧠 Educational Notes

This project bridges theory and simulation, combining network security topics with hands-on visual aids. While Cisco Packet Tracer has limitations (e.g. no real EMI or IMEI spoofing), creative simulation methods (e.g. bandwidth reduction, IP/MAC tricks) were applied to approximate real-world behavior.

---

## 🛡️ Disclaimer

This project is for **academic demonstration purposes** only.  
It does not represent production-grade network implementation.
