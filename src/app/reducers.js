import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
	SET_PAGE,
	BOOK_SEAT,
	SET_FETCHED_SEATS,
	SET_LOADING,
	OPEN_INFO_POPUP,
	CLOSE_INFO_POPUP,
	OPEN_FORM_POPUP,
	CLOSE_FORM_POPUP,
	SET_GAME_DATA
} from './constants'

import deepExtend from 'deep-extend'


function currentPage(state = 1, action) {
	switch (action.type) {
		case SET_PAGE:
			return action.payload
		default:
			return state
	}
}

function loading(state = false, action) {
	switch (action.type) {
		case SET_LOADING:
			return action.payload
		default: return state
	}
}

function seats(state = [], action) {
	switch (action.type) {
		case SET_FETCHED_SEATS:
			return fetchSeats(state, action)
		// case BOOK_SEAT:
		// 	return
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

function dumb(state = {}, action) {
	switch (action.type) {
		default:
			return state
	}
}

function infoPopup(state = {}, action) {
	switch (action.type) {
		case OPEN_INFO_POPUP:
			return {
				...state,
				isOpened: true,
				...action.payload
			}

		case CLOSE_INFO_POPUP:
			return {
				...state,
				isOpened: false,
				team: '',
				position: {}
			}

		default: return state
	}
}

function formPopup(state = {}, action) {
	switch (action.type) {
		case OPEN_FORM_POPUP:
			return {
				...state,
				isOpened: true,
				data: {
					...action.payload.data
				},
				position: action.payload.position
			}

		case CLOSE_FORM_POPUP:
			return {
				...state,
				isOpened: false,
				data: {
					...state.data,
					team: ''
				},
				position: {}
			}

		default: return state
	}
}

function game(state = {}, action) {
	switch (action.type) {
		case SET_GAME_DATA:
			return {
				...state,
				...action.payload
			}

		default: return state
	}
}

const seatBookingReducers = combineReducers({
	currentPage,
	loading,
	seats,
	game,
	formPopup,
	infoPopup,
	form: formReducer
})

export default seatBookingReducers
