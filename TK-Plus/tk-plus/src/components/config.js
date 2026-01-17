// Support environment variable configuration, REACT_APP_API_URL will be used in Docker
// Development environment: http://localhost:8080
// Docker environment: http://localhost:8080 or http://backend:8080
// Production environment: https://jo-enmedia-flask-app-48730501420.us-central1.run.app
const baseURL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://jo-enmedia-flask-app-48730501420.us-central1.run.app'
    : 'http://localhost:8080');

export default baseURL;