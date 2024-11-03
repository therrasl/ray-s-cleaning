FROM node:alpine as build 

COPY package-lock.json package.json
RUN  npm install --force
COPY . .
RUN  npm start

FROM nginx:stable-alpine 

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200 
CMD ["nginx" , "-g", "daemon off;"]