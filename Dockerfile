# image
FROM rhamdeew/lamp

LABEL maintainer "Krekotun"

ADD ./docker/configs/000-default.conf /etc/apache2/sites-available
# RUN ln -s /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-enabled/000-default.conf

COPY /docker/start.sh /start.sh
COPY /docker/stop.sh /stop.sh
