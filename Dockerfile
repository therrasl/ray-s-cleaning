FROM node:alpine as build 

CMD ["nginx" , "-g", "daemon off;" , "/bin/bash"]
COPY package-lock.json package.json
RUN  npm install -g @angular/cli
RUN  npm install --force
COPY . .
RUN  npm run build --configuration=production

FROM nginx:stable-alpine 

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200 
