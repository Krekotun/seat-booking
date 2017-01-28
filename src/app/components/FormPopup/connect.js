import { connect } from 'react-redux'
import * as actions from 'store/modules/formPopup'

const mapStateToProps = (state) => ({
	...state.formPopup
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})

export default (component) => connect(mapStateToProps)(component)
