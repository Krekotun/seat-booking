import axios from 'axios'
import * as loadingActions from 'store/modules/loading'
import * as formPopupActions from 'store/modules/formPopup'
import * as infoPopupActions from 'store/modules/infoPopup'
import * as notifyActions from 'store/modules/notify'

const SET_FETCHED_SEATS = 'SET_FETCHED_SEATS'
const BOOK_SEAT = 'BOOK_SEAT'
const FETCH_SEATS = 'FETCH_SEATS'
const CLEAR_SEATS = 'CLEAR_SEATS'

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
			return state.map((seat) => {
				if (+seat.table_id === +action.payload.table_id) {
					return {
						...seat,
						...action.payload,
						reserved: true
					}
				}

				return seat
			})
		case CLEAR_SEATS:
			return initialState
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
				result = fillSeat(seat, fetchedSeat)
			}
		})

		return result
	})
}

function fillSeat(state, seat) {
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
			.get('/api/tables', {
				params: {
					game_num: gameNum,
					game_type: gameType
				}
			})
			.then((response) => {
				dispatch(clearSeats())
				dispatch(setFetchedSeats(response.data))
				dispatch(loadingActions.hideLoading())
			})
	}

}

export function saveSeat(data) {
	return (dispatch, getState) => {

		let tablePosition = getState().formPopup.position

		dispatch(formPopupActions.setLoading(true))

		axios
			.post('api/tables', {
				game_num: data.game_num,
				game_type: data.game_type,
				table_id: data.table_id,
				team: data.team,
				captain: data.captain,
				phone: data.phone
			})
			.then((response) => {
				dispatch(clearSeats())
				dispatch(setFetchedSeats(response.data.tables))
				dispatch(formPopupActions.setLoading(false))
				dispatch(formPopupActions.closeFormPopup())

				if (response.data.status === 'exists') {
					dispatch( notifyActions.showError('К сожалению, это место уже занято') )
				}

				if (response.data.status === 'saved') {
					dispatch( notifyActions.showSuccess('Вы зарезервировали место') )
					dispatch(formPopupActions.resetForm())
					dispatch(infoPopupActions.openInfoPopup(data.team, tablePosition))
				}
			})
	}
}

export function setFetchedSeats(seats) {
	return {
		type: SET_FETCHED_SEATS,
		payload: seats
	}
}

export function bookSeat(seat) {
	return {
		type: BOOK_SEAT,
		payload: seat
	}
}

export function clearSeats() {
	return {
		type: CLEAR_SEATS
	}
}
