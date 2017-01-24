# seat-booking

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



Ставим докер, открываем корень проекта в консоли.

Билдим образ `docker build -t seat_table .`

Запускаем контейнер `docker run -v ${PWD}/public/:/var/www/srv/:ro -v ${PWD}/docker/db/:/db/ -p 8989:80 -it seat_table /bin/bash`

## Как работать с этим удовольствием

На локальной машине запускаем
`npm run install` ставим зависимости и все такое  
`npm run start` — дев режим  
`npm run production` — продакшн, соответственно  


## База

Настройки для доступа к базе пишем в `/public/backend/config.php`

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
