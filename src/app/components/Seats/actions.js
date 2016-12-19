import {
	OPEN_INFO_POPUP,
	CLOSE_INFO_POPUP
} from '../../constants'

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
