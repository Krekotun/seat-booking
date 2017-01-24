<?php

require 'functions.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
	return;
}

// variables

$game_num = $_GET['game_num'];
$game_type = $_GET['game_type'];

$conn = iquiz_db_connect();


if ($conn) {

	$is_open = iquiz_db_check_reg_is_open(
		array(
			'game_num' => $game_num,
			'game_type' => $game_type
		),
		$conn
	);

	if ( $is_open ) {
		$result = iquiz_db_get_tables(
			array(
				'game_num' => $game_num,
				'game_type' => $game_type
			),
			$conn
		);

		echo json_encode($result);
	} else {
		echo 'closed';
	}

} else {
	echo 'Can\'t connect to db';
}

?>
