import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		...state.formPopup
	}
}

export default function(component) {
	return connect(mapStateToProps)(component)
}
