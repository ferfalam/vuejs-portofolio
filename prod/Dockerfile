# Étape 1 : Construire l'application Vue.js
FROM node:14 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Configurer Nginx et servir l'application construite
FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY prod/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]