# seat-booking

## Как работать с этим удовольствием
Бекенд надо кидаем на http://seat-booking.dev:8989, туда стоит алиас для всех `/backend/` запросов с http://localhost:4000
Корнем для бекенда должна быть папка `/public`


`npm run install` ставим зависимости и все такое
`npm run start` — дев режим
`npm run production` — продакшн, соответственно


## База

Настройки для доступа к базе пишем в `/public/backend/config.php`
Пример файла `config.php.example`

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
