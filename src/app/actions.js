import {
	FETCH_SEATS,
	SET_LOADING,
	SET_GAME_DATA
} from './constants'

import axios from 'axios'

export function getSeats(gameNum, gameType) {

	return (dispatch) => {
		dispatch(showLoading())

		axios
			.get('/backend/get_tables.php', {
				params: {
					game_num: gameNum,
					game_type: gameType
				}
			})
			.then((response) => {
				dispatch(setFetchedSeats(response.data))
				dispatch(hideLoading())
			})
	}

}

export function setFetchedSeats(seats) {
	return {
		type: 'SET_FETCHED_SEATS',
		payload: seats
	}
}

export function showLoading() {
	return setLoading(true)
}

export function hideLoading() {
	return setLoading(false)
}

export function setLoading(value) {
	return {
		type: SET_LOADING,
		payload: value
	}
}

export function setGameData(number, type) {
	return {
		type: SET_GAME_DATA,
		payload: {
			num: number,
			type: type
		}
	}
}
