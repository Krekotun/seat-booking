# Резервация столиков

## Структура проекта
- /docker
	+ /configs - разные конфиги, используется пока только конфиг для апача
	+ /db
		- db.sql дамп базы
		- db.txt данные для базы и пользователя, которые создатутся при запуске контейнера
	+ start.sh — скрипт, который запускается при старте контейнера
	+ stop.sh — перед выходом из контейнера лучше оставновить его запустив этот скрипт, тогда база сохранится
- /public
	+ /api - php бекенд
		- config.php — настройки для доступа к базе
		- functions.php
		- get_tables.php
		- set_tables.php
	+ /assets - автоматически генерится
- /src — весь фронтенд проекта

## Запуск проекта
Ставим [докер](https://github.com/prakhar1989/docker-curriculum), открываем корень проекта в консоли.

Билдим образ `docker build -t seat_table .`

Запускаем контейнер `docker run -v ${PWD}/public/:/var/www/srv/ -v ${PWD}/docker/db/:/db/ -p 8989:80 -it seat_table /bin/bash`
Откроется консоль контейнера.
Чтобы запустить сервер пишем `/start.sh` и жмем enter.
Для остановки `/stop.sh`

После старта, проект будет доступен по адресу http://localhost:8989

Внутри контейнера никакой ноды нет, весь клиент надо собирать на локальной машине.

Для этого выполняем следующее:
`npm run install` ставим зависимости и все такое  
`npm run start` — дев режим  
`npm run production` — продакшн, соответственно  

В дев режиме проект доступен по http://localhost:4000, все бекенд запросы будут идти на http://localhost:8989


## База

Структура таблицы столиков
```
CREATE TABLE `iq_tables` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `table_id` int(11) NOT NULL,
 `team` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `captain` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `phone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `game_num` int(11) NOT NULL,
 `game_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3775 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
``
