import { createStore, applyMiddleware } from 'redux'
import seatBookingReducers from './reducers'

const defaultState = {
	loading: false,
	seats: [
		{
			"table_id":"26",
			"team":"\u0414\u0440\u0443\u0437\u044c\u044f \u041f\u043b\u0430\u0442\u043e\u043d\u0430",
			page: 1
		},
		{"table_id":"21","team":"\u041f\u043e\u0442\u0440\u0430\u0447\u0435\u043d\u043e!"},
		{"table_id":"16","team":"\u0413\u0440\u0430\u043d \u0422\u043e\u0440\u0438\u043d\u043e"},
		{"table_id":"15","team":"Iron \u041c\u0430\u0439\u0434\u0430\u043d"},
		{"table_id":"22","team":"In Team"}
	],
	app: {
		floors: {
			1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30, 31],
			2: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
		},
		gameNum: 181,
		gameType: 'qnq'
	},
	currentPage: 1,
	formPopup: {
		isOpened: false,
		tableId: null,
		team: "A",
		captain: "B",
		phone: "234534645",
	},
	infoPopup: {
		isOpened: false,
		team: ''
	},
}

const store = createStore(seatBookingReducers, defaultState)

export default store
