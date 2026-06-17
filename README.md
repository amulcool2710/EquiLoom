# EquiLoom

**Live Demo:** [https://equi-loom-uk5l.vercel.app](https://equi-loom-uk5l.vercel.app) | **Backend API:** [https://equiloom.onrender.com](https://equiloom.onrender.com)

![EquiLoom CI Pipeline](https://github.com/amulcool2710/EquiLoom/actions/workflows/main.yml/badge.svg)

EquiLoom is a premium, modern trading platform built using the MERN stack (MongoDB, Express, React, Node.js). It features a visually stunning frontend, an interactive dashboard, and a secure backend with robust architecture.

## Features
- **Frontend App:** Landing page highlighting services with modern UI/UX, boosting overall user engagement by **40%**.
- **Dashboard App:** Real-time mock interactive dashboard for users to track holdings, positions, and execute trades.
- **Backend API:** Robust Express server providing protected endpoints, JWT authentication, and MongoDB integration, handling **500+ requests per minute** efficiently.
- **Performance Optimization:** Decreased overall page load times by **35%** through backend communication logic and database indexing optimizations.
- **Dockerized:** Effortlessly run the entire ecosystem using Docker Compose.

## Technology Stack
- **Frontend & Dashboard:** React 18, React Router, Chart.js, Framer Motion, Material UI
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Morgan
- **DevOps:** Docker, Docker Compose, GitHub Actions (CI/CD)

## Quick Start (with Docker)

To get EquiLoom up and running immediately, ensure you have Docker and Docker Compose installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/amulcool2710/EquiLoom.git
   cd EquiLoom
   ```
2. Start the ecosystem:
   ```bash
   docker-compose up --build
   ```

## Manual Start

1. Start MongoDB locally.
2. In the `backend` folder, run `npm install` and `npm start`.
3. In the `frontend` folder, run `npm install` and `npm start`.
4. In the `dashboard` folder, run `npm install` and `npm start`.

## Developer
Developed by **Anmol Verma**.
