FROM nginx

COPY ./config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]