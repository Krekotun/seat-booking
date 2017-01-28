import { reset, change } from 'redux-form'

export const OPEN = 'form-popup/OPEN'
export const CLOSE = 'form-popup/CLOSE'
export const SET_LOADING = 'form-popup/SET_LOADING'

const initialState = {
	isOpened: false,
	isLoading: false,
	data: {
		table_id: null,
		team: "",
		captain: "",
		phone: "",
		game_num: "",
		game_type: ""
	},
	position: {
		x: 0,
		y: 0
	}
}


composeReducer({
	...openReducer
})

const openReducer = { OPEN: () => {} }

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case OPEN:
			return {
				...state,
				isOpened: true,
				data: {
					...action.payload.data
				},
				position: action.payload.position
			}

		case CLOSE:
			return {
				...state,
				isOpened: false,
				data: {
					...state.data,
					team: ''
				},
				position: {}
			}

		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload
			}

		default: return state
	}
}

export function openFormPopup(seat, position) {
	return (dispatch) => {
		dispatch({
			type: OPEN,
			payload: {
				data: {
					table_id: seat.table_id
				},
				position: {
					...position
				}
			}
		})

		dispatch( change('reservation', 'table_id', seat.table_id) )
	}

}

export function resetForm() {
	return reset('reservation')
}

export function closeFormPopup() {
	return (dispatch) => {
		dispatch({
			type: CLOSE
		})
	}
}

export function setLoading(value) {
	return {
		type: SET_LOADING,
		payload: value
	}
}
