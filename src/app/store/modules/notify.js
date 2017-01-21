const SHOW = 'notify/SHOW'
const HIDE = 'notify/HIDE'

let hideTimer;

const initialState = {
	state: 'hide',
	type: 'success',
	text: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SHOW:
			return {
				state: 'show',
				...action.payload
			}
		case HIDE:
			return {
				...state,
				state: 'hide'
			}
		default: return state
	}
}

export function showNotify(text, type) {
	return (dispatch) => {
		clearTimeout(hideTimer)

		dispatch({
			type: SHOW,
			payload: {
				type: type,
				text: text
			}
		})

		hideTimer = setTimeout(() => {
			dispatch(hideNotify())
		}, 3000)
	}
}

export function showError(text) {
	return showNotify(text, 'error')
}

export function showSuccess(text) {
	return showNotify(text, 'success')
}

export function hideNotify() {
	return {
		type: HIDE
	}
}
