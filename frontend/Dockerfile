FROM node AS build
WORKDIR /app
ENV REACT_APP_API_URI="http://localhost:3001"
COPY . .
RUN npm install && npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
