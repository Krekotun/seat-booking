import React from 'react';
import cx from 'classnames'
import { connect } from 'react-redux'
import Seats from 'components/Seats'
import InfoPopup from 'components/InfoPopup'

const Area = (props) => {
	let klass = cx('iquiz_tables--area', `-area_${props.currentPage}`)
	return (
		<div className={ klass }>
			<InfoPopup />
			<Seats />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentPage: state.currentPage
	}
}

export default connect(mapStateToProps)(Area)
