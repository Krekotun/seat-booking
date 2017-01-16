import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		...state.formPopup
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps)(component)
}
