import { connect } from 'react-redux'
import * as actions from 'store/modules/formPopup'

const mapStateToProps = (state) => ({
	pagination: state.pagination
})

export default (component) => connect(mapStateToProps)(component)
