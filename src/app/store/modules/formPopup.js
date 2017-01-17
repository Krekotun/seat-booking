export const OPEN_FORM_POPUP = 'OPEN_FORM_POPUP'
export const CLOSE_FORM_POPUP = 'CLOSE_FORM_POPUP'

const initialState = {
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
}

export default function reducer(state = initialState, action) {
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

export function openFormPopup(seat, position) {
	return {
		type: OPEN_FORM_POPUP,
		payload: {
			data: {
				table_id: seat.table_id
			},
			position: {
				...position
			}
		}
	}
}

export function closeFormPopup() {
	return {
		type: CLOSE_FORM_POPUP
	}
}
