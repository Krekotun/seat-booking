import {
	OPEN_INFO_POPUP,
	CLOSE_INFO_POPUP,
	OPEN_FORM_POPUP,
	CLOSE_FORM_POPUP
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
