#!/usr/bin/env bash
set -euo pipefail

echo "Installing dependencies..."
npm install --prefix futurevision-api
npm install --prefix futurevision-ui

echo "Building frontend..."
npm run build --prefix futurevision-ui

export NODE_ENV=production
export PORT=${PORT:-4000}

echo "Starting API server..."
node futurevision-api/server.js