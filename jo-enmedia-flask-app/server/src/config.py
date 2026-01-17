import os

# Email configuration (supports environment variables)
USERNAME = os.environ.get('MAIL_USERNAME', 'info@jo-enmedia.com')
PASSWORD = os.environ.get('MAIL_PASSWORD', 'EB6F94442A62BFBED2B527A1FDFB396FE059')

# CORS configuration (supports environment variables)
# Docker environment: read from environment variables, allow multiple origins
# Development environment: default allow localhost:3000
# Production environment: allow Firebase and domain names
ORIGIN_ENV = os.environ.get('ORIGIN', '')
if ORIGIN_ENV:
    # Support comma-separated multiple origins
    ORIGIN = [origin.strip() for origin in ORIGIN_ENV.split(',')]
else:
    # Default configuration
    ORIGIN = [
        "http://localhost:3000",
        "http://localhost:80",
        "https://tk-plus-71c88.firebaseapp.com",
        "https://tk-plus-71c88.web.app",
        "https://jo-enmedia.com"
    ]
