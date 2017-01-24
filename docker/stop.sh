#!/bin/bash

ROOTLOGIN="root"
ROOTPASSWORD="password"

IFS="="
while read name value
do
  eval $name="$value";
done < /db/db.txt

mysqldump --user=$ROOTLOGIN --password=$ROOTPASSWORD $dbname > /db/db.sql

service mysql stop
service apache2 stop
