# Jo-Enmedia Website

Production website for Jo-Enmedia, a digital marketing and media company. This is a full-stack web application built as a client project.

🌐 **Live Website**: [https://jo-enmedia.com/](https://jo-enmedia.com/)

## Overview

This project consists of a modern React frontend and a Flask backend API, designed to showcase Jo-Enmedia's services including digital marketing, MCN resources, and content creation capabilities.

## Technology Stack

### Frontend
- **React** 18.3.1
- **React Router** 6.25.1
- **Axios** 1.7.7
- **React Scripts** 3.4.4
- **Nginx** (Production deployment)

### Backend
- **Flask** 3.0.3
- **Gunicorn** (WSGI server)
- **Flask-CORS** 5.0.0
- **Flask-Mail** 0.10.0
- **Python** 3.10

### Deployment
- **Docker** & **Docker Compose**
- **Firebase Hosting** (Frontend)
- **Google Cloud Run** (Backend API)

## Project Structure

```
Jo-enmedia/
├── TK-Plus/                    # Frontend React application
│   └── tk-plus/
│       ├── src/                # React source code
│       ├── public/             # Static assets
│       ├── Dockerfile          # Frontend Docker image
│       └── nginx.conf          # Nginx configuration
│
├── jo-enmedia-flask-app/       # Backend Flask API
│   └── server/
│       ├── src/
│       │   ├── app.py          # Flask application
│       │   ├── config.py       # Configuration
│       │   └── templates/      # Email templates
│       └── Dockerfile          # Backend Docker image
│
├── docker-compose.yml          # Docker Compose configuration
└── README.md                   # This file
```

## Features

- **Responsive Design**: Mobile-first responsive layout supporting desktop, tablet, and mobile devices
- **Contact Form**: Integrated contact form with email notifications
- **Service Showcase**: Display of company services and capabilities
- **Portfolio Gallery**: Showcase of previous work and case studies
- **API Integration**: RESTful API for handling contact submissions

## Getting Started

### Prerequisites

- **Node.js** 18+ (for frontend development)
- **Python** 3.10+ (for backend development)
- **Docker** & **Docker Compose** (for containerized deployment)

### Development Setup

#### Frontend

```bash
cd TK-Plus/tk-plus
npm install
npm start
```

The frontend will be available at `http://localhost:3000`

#### Backend

```bash
cd jo-enmedia-flask-app/server
pip install -r requirements.txt
python src/app.py
```

The backend API will be available at `http://localhost:8080`

### Docker Deployment

The easiest way to run the entire application is using Docker Compose:

```bash
docker compose up
```

This will start both frontend and backend services:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080

For detailed Docker instructions, see [DOCKER_README.md](./DOCKER_README.md)

## Environment Variables

### Frontend
- `REACT_APP_API_URL`: Backend API URL (default: `http://localhost:8080`)

### Backend
- `PORT`: Server port (default: `8080`)
- `ORIGIN`: CORS allowed origins (comma-separated)
- `MAIL_USERNAME`: Email service username
- `MAIL_PASSWORD`: Email service password

## Build for Production

### Frontend

```bash
cd TK-Plus/tk-plus
npm run build
```

The production build will be created in the `build/` directory.

### Backend

The backend is deployed using Gunicorn in the Docker container. For local production builds:

```bash
cd jo-enmedia-flask-app/server
gunicorn --bind 0.0.0.0:8080 --workers 1 --threads 8 src.app:app
```

## API Endpoints

- `GET /` - Health check endpoint
- `POST /api/contact_us` - Submit contact form
  - Request body: `{ Name: string, Email: string, contactNumber: string }`

## Deployment

### Production Environment

- **Frontend**: Deployed on Firebase Hosting
  - Domain: https://tk-plus-71c88.web.app
  - Custom Domain: https://jo-enmedia.com
  
- **Backend**: Deployed on Google Cloud Run
  - Endpoint: https://jo-enmedia-flask-app-48730501420.us-central1.run.app

### CI/CD

GitHub Actions workflows are configured for automatic deployment to Firebase Hosting.

## Contributing

This is a client project. For any modifications or updates, please contact the project maintainer.

## License

Copyright © Jo-Enmedia. All rights reserved.

## Contact

For inquiries about this project:
- **Website**: https://jo-enmedia.com/
- **Email**: info@jo-enmedia.com

---

**Note**: This project was built as a contract project for production deployment. All code and configurations are optimized for production use.
