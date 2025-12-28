FROM node:22

WORKDIR /app

# Copy root package for potential workspace scripts
COPY package.json package-lock.json ./

# Copy API manifests and install
COPY futurevision-api/package.json futurevision-api/package-lock.json futurevision-api/
# Copy UI manifests and install
COPY futurevision-ui/package.json futurevision-ui/package-lock.json futurevision-ui/

RUN npm install --prefix futurevision-api \
    && npm install --prefix futurevision-ui

# Copy source code
COPY futurevision-api futurevision-api
COPY futurevision-ui futurevision-ui

# Build frontend
RUN npm run build --prefix futurevision-ui

ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000

CMD ["node", "futurevision-api/server.js"]