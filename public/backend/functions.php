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
