import axios from 'axios'
import * as loadingActions from 'store/modules/loading'

const SET_FETCHED_SEATS = 'SET_FETCHED_SEATS'
const BOOK_SEAT = 'BOOK_SEAT'
export const FETCH_SEATS = 'FETCH_SEATS'

const initialState = (function() {
	const floors = {
		1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30, 31],
		2: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
	}

	let result = []

	for (let floor in floors) {

		for (let i = 0; i < floors[floor].length; i++) {
			result[result.length] = {
				table_id: floors[floor][i],
				team: '',
				page: +floor,
				reserved: false,
				admins: floors[floor][i] === 0
			}
		}

	}

	return result
})()

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case SET_FETCHED_SEATS:
			return fetchSeats(state, action)
		case BOOK_SEAT:
			return state
		default: return state
	}
}

function fetchSeats(state, action) {
	let fetchedSeats = action.payload

	return state.map((seat) => {
		let result = seat
		if (seat.reserved || seat.admins || !fetchedSeats.length) return result

		fetchedSeats.forEach((fetchedSeat, i) => {
			if (+seat.table_id === +fetchedSeat.table_id) {
				result = bookSeat(seat, fetchedSeat)
			}
		})

		return result
	})
}

function bookSeat(state, seat) {
	return {
		...state,
		...seat,
		reserved: true
	}
}

// actions
export function getSeats(gameNum, gameType) {

	return (dispatch) => {
		dispatch(loadingActions.showLoading())

		axios
			.get('/backend/get_tables.php', {
				params: {
					game_num: gameNum,
					game_type: gameType
				}
			})
			.then((response) => {
				dispatch(setFetchedSeats(response.data))
				dispatch(loadingActions.hideLoading())
			})
	}

}

export function setFetchedSeats(seats) {
	return {
		type: SET_FETCHED_SEATS,
		payload: seats
	}
}
