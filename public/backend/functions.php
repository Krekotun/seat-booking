<?php

function iquiz_db_connect() {
	require 'config.php';

	try {
		$conn = new PDO(
			'mysql:host=localhost;dbname=' . $config["IQ_DB_NAME"],
			$config['IQ_DB_USERNAME'],
			$config['IQ_DB_PASSWORD']
		);
		$conn->exec("set names utf8");
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		return $conn;

	} catch(PDOException $e) {
		return false;
	}
}

// CREATE TABLE `iq_tables` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `table_id` int(11) NOT NULL,
//   `team` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//   `captain` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//   `phone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//   `game_num` int(11) NOT NULL,
//   `game_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3775 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

function iquiz_db_get_tables($bindings, $conn) {
	$stmt = $conn->prepare(
		"SELECT table_id, team
		FROM iq_tables
		WHERE game_num = :game_num
		AND game_type = :game_type"
	);

	$stmt->setFetchMode(PDO::FETCH_ASSOC);
	$stmt->execute($bindings);

	$result = $stmt->fetchAll();

	return $result;
}

function iquiz_db_check_exist($bindings, $conn) {
	// INSERT INTO tables (table_id, team, captain, phone, game_num, game_type) SELECT * FROM (SELECT :table_id, :team, :captain, :phone, :game_num, :game_type) AS tmp WHERE NOT EXISTS (select * from tables where table_id = :table_id and game_num = :game_num and game_type = :game_type) LIMIT 1;
	$stmt = $conn->prepare(
		"SELECT *
		FROM iq_tables
		WHERE table_id = :table_id
		AND game_num = :game_num
		AND game_type = :game_type"
	);

	$stmt->execute($bindings);
	$result = $stmt->fetch();

	if ($result) {
		return true;
	} else {
		return false;
	}
}

function iquiz_db_set_table($bindings, $conn) {
	$stmt = $conn->prepare(
		"INSERT into iq_tables
		values(null, :table_id, :team, :captain, :phone, :game_num, :game_type)"
	);
	$stmt->execute($bindings);

	return $result;
}

function iquiz_db_check_reg_is_open($bindings, $conn) {
	$stmt = $conn->prepare(
		"SELECT *
		FROM games
		WHERE type = :game_type
		AND nomer = :game_num
		AND site = 1"
	);
	$stmt->execute($bindings);

	$result = $stmt->fetch();

	if ($result) {
		return true;
	} else {
		return false;
	}
}
