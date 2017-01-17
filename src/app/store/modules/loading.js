const SET_LOADING = 'SET_LOADING'

const initialState = false

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case SET_LOADING:
			return action.payload
		default: return state
	}
}

export function showLoading() {
	return setLoading(true)
}

export function hideLoading() {
	return setLoading(false)
}

export function setLoading(value) {
	return {
		type: SET_LOADING,
		payload: value
	}
}
