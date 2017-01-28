import React from 'react';
import cx from 'classnames'

const Loading = (props) => {
	let klass = cx('iquiz_tables--loading', {
		'-show': props.loading
	})

	return (
		<div className={ klass }>Loading</div>
	)
}


export default Loading
