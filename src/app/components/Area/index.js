import React from 'react';
import cx from 'classnames'
import { connect } from 'react-redux'
import Seats from 'components/Seats'
import InfoPopup from 'components/InfoPopup'
import FormPopup from 'components/FormPopup'

const Area = (props) => {
	let klass = cx('iquiz_tables--area', `-area_${props.pagination}`)
	return (
		<div className={ klass }>
			<InfoPopup />
			<FormPopup />
			<Seats />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		pagination: state.pagination
	}
}

export default connect(mapStateToProps)(Area)
