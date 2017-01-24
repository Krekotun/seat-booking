#!/bin/bash

# ln -s /var/www/srv/etc/php.ini /etc/php5/apache2/conf.d/90-myphp.ini
service mysql start
service apache2 start

ROOTLOGIN="root"
ROOTPASSWORD="password"

IFS="="
while read name value
do
  eval $name="$value";
done < /db/db.txt

mysql --user=$ROOTLOGIN --password=$ROOTPASSWORD -e "CREATE DATABASE IF NOT EXISTS $dbname; CREATE USER '$login'@'localhost' IDENTIFIED BY '$password'; GRANT ALL PRIVILEGES ON $dbname . * TO '$login'@'localhost';"
mysql --user=$ROOTLOGIN --password=$ROOTPASSWORD $dbname < /db/db.sql
