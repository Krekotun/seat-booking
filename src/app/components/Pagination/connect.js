import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'store/modules/pagination'

const mapStateToProps = (state) => {
	return {
		pagination: state.pagination
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}
