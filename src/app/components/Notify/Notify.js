import React from 'react';
import cx from 'classnames'

const Notify = (props) => {
	let { type, state } = props

	let klass = cx(
		'notify',
		`notify_${type}`,
		`notify_${state}`
	)

	return (
		<div className={ klass }>
			{ props.text }
		</div>
	)
}

export default Notify
