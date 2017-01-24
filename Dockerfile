# image
FROM rhamdeew/lamp

LABEL maintainer "Krekotun"

ADD ./docker/configs/000-default.conf /etc/apache2/sites-available
# RUN ln -s /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-enabled/000-default.conf

COPY /docker/start.sh /start.sh
COPY /docker/stop.sh /stop.sh


# commands
CMD ["./start.sh"]

# RUN mysql -uroot -e "create database seat_table"

# sudo docker run -v ~/Work/krekotun/seat-booking/public/:/var/www/srv/ -p 80:80 -t -i rhamdeew/lamp /bin/bash

# docker run -p "8989:80" -v ${PWD}/public:/app:ro seat_table

# docker run -p "8989:80" -v ${PWD}/public:/app -v ${PWD}/server/db:/mysql mattrayner/lamp:latest-1604

# dgraziotin/lamp

# docker run -v ${PWD}/public/:/var/www/srv/ -v ${PWD}/docker/db/:/db/ -p 8989:80 -it seat_table /bin/bash
