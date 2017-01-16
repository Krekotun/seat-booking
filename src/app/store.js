import { createStore, applyMiddleware } from 'redux'
import seatBookingReducers from './reducers'
import thunk from 'redux-thunk'

const polluteSeats = () => {
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
}



const defaultState = {
	loading: false,
	seats: polluteSeats(),
	game: {
		num: 243,
		type: 'qnq'
	},
	currentPage: 1,
	formPopup: {
		isOpened: false,
		data: {
			table_id: null,
			team: "",
			captain: "",
			phone: "",
		},
		position: {
			x: 0,
			y: 0
		}
	},
	infoPopup: {
		isOpened: false,
		team: '',
		position: {
			x: 0,
			y: 0
		}
	},
}

const store = createStore(
	seatBookingReducers,
	defaultState,
	applyMiddleware(thunk)
)

export default store
