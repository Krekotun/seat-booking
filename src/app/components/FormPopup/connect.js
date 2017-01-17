import { connect } from 'react-redux'
import * as actions from 'store/modules/formPopup'

function mapStateToProps(state) {
	return {
		...state.formPopup
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default function(component) {
	return connect(mapStateToProps)(component)
}
