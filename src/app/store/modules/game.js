const SET_GAME_DATA = 'SET_GAME_DATA'

const initialState = {
	num: '',
	type: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_GAME_DATA:
			return {
				...state,
				...action.payload
			}

		default: return state
	}
}

export function setGameData(gameId) {
	return {
		type: SET_GAME_DATA,
		payload: {
			num: gameId
		}
	}
}
