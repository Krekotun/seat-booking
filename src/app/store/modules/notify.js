const SHOW = 'notify/SHOW'
const HIDE = 'notify/HIDE'

let hideTimer;

const initialState = {
	status: 'hide',
	type: 'success',
	text: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SHOW:
			return {
				status: 'show',
				...action.payload
			}
		case HIDE:
			return {
				...initialState
			}
		default: return state
	}
}

export function showNotify(text, type) {
	return dispatch => {
		dispatch({
			type: SHOW,
			payload: {
				type: type,
				text: text
			}
		})

		hideTimer = setTimeout(() => {
			dispatch(hideNotify())
		}, 2000)
	}
}

export function hideNotify() {
	return {
		type: HIDE
	}
}
