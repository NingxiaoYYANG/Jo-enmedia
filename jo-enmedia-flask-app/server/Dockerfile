FROM python:3.10

WORKDIR /app

# Install curl for health check
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
COPY src/ ./src/

RUN pip install --no-cache-dir -r requirements.txt

ENV PORT 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:${PORT}/ || exit 1

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 src.app:app