# Build Stage
FROM --platform=linux/amd64 node:18-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Production Stage
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Optional: custom nginx config (ใช้ค่า default ก็ได้)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]