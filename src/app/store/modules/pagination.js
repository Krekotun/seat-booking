const SET_PAGE = 'SET_PAGE'

const initialState = 1

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_PAGE:
			return action.payload
		default:
			return state
	}
}

export function setPage(page) {
	return {
		type: SET_PAGE,
		payload: page
	}
}
