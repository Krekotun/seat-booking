import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as seatsActions from 'store/modules/seats'
import * as formPopupActions from 'store/modules/formPopup'
import * as infoPopupActions from 'store/modules/infoPopup'

const filterByPage = (seats, pagination) =>
	seats.filter( (_) => +_.page === +pagination )

const mapStateToProps = (state) => ({
	seats: filterByPage(state.seats, state.pagination),
	game: state.game
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({
		...seatsActions,
		...formPopupActions,
		...infoPopupActions
	}, dispatch)
})

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)
