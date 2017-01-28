import { connect } from 'react-redux'
import * as actions from 'store/modules/formPopup'

const mapStateToProps = (state) => {
	return {
		pagination: state.pagination
	}
}

export default function(component) {
	return connect(mapStateToProps)(component)
}
