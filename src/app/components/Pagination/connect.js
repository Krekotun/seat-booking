import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions'

const mapStateToProps = (state) => {
	return {
		currentPage: state.currentPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}
