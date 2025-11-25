# Multi-stage build: build Angular app with Node, serve static files with nginx
FROM node:18-alpine AS builder
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci

# copy source and build (production)
COPY . .
# try to build in production mode; ng build is the package.json "build" script
RUN npm run build -- --configuration production || npm run build

# ------------------------------------------------------------------
# Stage: runtime with nginx to serve the built files
FROM nginx:stable-alpine AS runner

# copy built static files from builder
# If your dist output is dist/testproject, change the source path accordingly:
# COPY --from=builder /app/dist/testproject/ /usr/share/nginx/html
COPY --from=builder /app/dist/ /usr/share/nginx/html

# SPA fallback and basic caching config (see nginx.conf provided)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
