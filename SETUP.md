# Setup for developing the documentation locally with Docker

This document outlines the steps to configure and run Docusaurus to develop the documentation using Docker in your local environment.

## Prerequisites

Make sure you have the following installed on your system.

- Docker Engine: [Installation Instructions](https://docs.docker.com/engine/install/ubuntu/)
- Docker Compose: [Installation Instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

## Configuration Steps

### 1. Clone the repository

```bash
git clone git@github.com:IFAM-SEGURIDAD-S-L-U/developer-documentation.git
```

### 2. Navigate to the Project Directory

```bash
cd developer-documentation
```

### 3. Build and Run the Containers

```bash
docker compose up --build
```

This will build the necessary images and run the containers according to the configuration in `docker-compose.yml`. Once the containers are up and running, Docusaurus will be available for development.

### 4. Access the documentation locally

Open a web browser and visit `http://localhost:3000` to view the documentation site. Now you can edit the existing documentation or add new content. Any changes you make will be reflected in real-time.
