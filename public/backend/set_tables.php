<?php
require 'functions.php';

$conn = iquiz_db_connect();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$table_id = $request->table_id;
$team = $request->team;
$captain = $request->captain;
$phone = $request->phone;
$game_num = $request->game_num;
$game_type = $request->game_type;

function getTables($conn, $game_num, $game_type) {
	return iquiz_db_get_tables(
		array(
			'game_num' => $game_num,
			'game_type' => $game_type
		),
		$conn
	);
}

if ($table_id and $team and $captain and $phone and $game_num and $game_type) {

	if ($conn) {

		$exist = iquiz_db_check_exist(array(
			'table_id' => $table_id,
			'game_num' => $game_num,
			'game_type' => $game_type
		), $conn);

		$is_open = iquiz_db_check_reg_is_open(array(
			'game_num' => $game_num,
			'game_type' => $game_type
		), $conn);


		if ($is_open) {

			if ($exist) {
				$result = array(
					'status' => 'exists',
					'tables' => getTables($conn, $game_num, $game_type)
				);

				echo json_encode($result);

				return;
			}

			iquiz_db_set_table(
				array(
					'table_id' => $table_id,
					'team' => $team,
					'captain' => $captain,
					'phone' => $phone,
					'game_num' => $game_num,
					'game_type' => $game_type
				),
				$conn
			);

			$result = array(
				'status' => 'ok',
				'tables' => getTables($conn, $game_num, $game_type)
			);

			echo json_encode($result);

		} else {
			echo 'You shall not pass!';
		}

	} else {
		echo 'Can\'t connect to db';
	}

} else {
	echo 'не хватает переменных';
}
