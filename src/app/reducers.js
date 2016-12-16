import { combineReducers } from 'redux'

function currentPage(state = 1, action) {
	switch (action.type) {
		case 'SET_PAGE':
			currentPage: action.payload
		default:
			return state
	}
}

function loading(state = false, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return action.payload
		default:
			return state
	}
}

const seatBookingReducers = combineReducers({
	currentPage,
	loading,

})

export default seatBookingReducers
