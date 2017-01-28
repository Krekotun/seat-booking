import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	...state.notify
})

export default function(component) {
	return connect(mapStateToProps)(component)
}
