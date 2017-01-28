import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'store/modules/pagination'

const mapStateToProps = (state) => ({
	pagination: state.pagination
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)
