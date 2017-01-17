export const OPEN_INFO_POPUP = 'OPEN_INFO_POPUP'
export const CLOSE_INFO_POPUP = 'CLOSE_INFO_POPUP'

const initialState = {
	isOpened: false,
	team: '',
	position: {
		x: 0,
		y: 0
	}
}

// Reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_INFO_POPUP:
			return {
				...state,
				isOpened: true,
				...action.payload
			}

		case CLOSE_INFO_POPUP:
			return {
				...state,
				isOpened: false,
				team: '',
				position: {}
			}

		default: return state
	}
}

// Actions Creators
export function openInfoPopup(team, position) {
	return {
		type: OPEN_INFO_POPUP,
		payload: {
			team: team,
			position: {
				...position
			}
		}
	}
}

export function closeInfoPopup() {
	return {
		type: CLOSE_INFO_POPUP
	}
}
