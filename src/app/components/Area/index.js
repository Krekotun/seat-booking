import React from 'react';
import cx from 'classnames'

const Area = (props) => {
	let klass = cx('iquiz_tables--area', `-area_${props.currentPage}`)
	return (
		<div className={ klass }>

		</div>
	)
}

export default Area
