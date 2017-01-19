import { connect } from 'react-redux'
import * as actions from 'store/modules/notify'

function mapStateToProps(state) {
	return {
		...state.notify
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
