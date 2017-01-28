import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	loading: state.loading
})

export default (component) => connect(mapStateToProps)(component)
