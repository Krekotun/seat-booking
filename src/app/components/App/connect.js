import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from 'store/modules/game'
import * as notifyActions from 'store/modules/notify'

// const mapStateToProps = (state) => ({
// 	pagination: state.pagination
// })
//
const mapStateToProps = (state) => ({
	pagination: state.pagination
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(
		{ ...gameActions, ...notifyActions },
		dispatch
	)
})

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)
