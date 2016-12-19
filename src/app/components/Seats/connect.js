import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions'

const mapStateToProps = (state) => {
	return {
		seats: filterByPage(state.seats, state.currentPage)
	}
}

function filterByPage(seats, currentPage) {
	return seats.filter(seat => {
		return +seat.page === +currentPage
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}
