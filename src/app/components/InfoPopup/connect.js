import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {
		...state.infoPopup
	}
}

export default function(component) {
	return connect(mapStateToProps)(component)
}
