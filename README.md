# AWS EC2 + Docker + Nginx Application Deployment

## Project Overview

This project demonstrates how to deploy a sample application on an AWS Ubuntu EC2 instance using Docker and Nginx.

The application is cloned from GitHub, packaged and deployed using Docker, and exposed to users through Nginx.

## Architecture

Internet
   |
   | HTTP :80
   v
AWS Security Group
   |
   v
Ubuntu EC2
   |
   v
Nginx
   |
   | Reverse Proxy
   v
Docker Container
   |
   v
Application :3000

## Technologies Used

- AWS EC2
- Ubuntu Linux
- Git
- GitHub
- Docker
- Nginx
- SSH

## AWS Security Group

The following inbound ports are configured:

| Protocol | Port | Source | Purpose |
|---|---:|---|---|
| TCP | 22 | My IP | SSH access |
| TCP | 80 | 0.0.0.0/0 | HTTP traffic |
| TCP | 443 | 0.0.0.0/0 | HTTPS traffic |

The application port is not publicly exposed because Nginx forwards traffic internally to the Docker container.

## Server Setup

Update the Ubuntu system:

```bash
sudo apt update
sudo apt upgrade -y
