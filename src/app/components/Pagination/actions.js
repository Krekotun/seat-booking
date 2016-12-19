import { SET_PAGE } from '../../constants'

export function setPage(page) {
	return {
		type: SET_PAGE,
		payload: page
	}
}
