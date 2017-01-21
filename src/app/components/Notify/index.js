import React from 'react';
import connect from './connect'
// import style from './index.sss'
import cx from 'classnames'

const Notify = (props) => {
	let { type, state } = props

	// let klass = cx(
	// 	'style.notify,'
	// 	style[`notify_${type}`],
	// 	style[`notify_${status}`]
	// )

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

export default connect(Notify)
