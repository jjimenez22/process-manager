# BUILD
FROM node:11-alpine as build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# DEPLOY
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
