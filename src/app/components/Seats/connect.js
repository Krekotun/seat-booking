import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as seatsActions from 'store/modules/seats'
import * as formPopupActions from 'store/modules/formPopup'
import * as infoPopupActions from 'store/modules/infoPopup'

const mapStateToProps = (state) => {
	return {
		seats: filterByPage(state.seats, state.pagination),
		game: state.game
	}
}

function filterByPage(seats, pagination) {
	return seats.filter(seat => {
		return +seat.page === +pagination
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({
			...seatsActions,
			...formPopupActions,
			...infoPopupActions
		}, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}
