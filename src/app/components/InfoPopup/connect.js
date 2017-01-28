import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	...state.infoPopup
})

export default function(component) {
	return connect(mapStateToProps)(component)
}
