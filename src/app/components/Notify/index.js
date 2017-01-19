import React from 'react';
import connect from './connect'
import style from './index.sss'
import cx from 'classnames'

const Notify = (props) => {
	let klass = cx(style.notify, `-${props.type}`)
	return (
		<div className={ klass }>
			{ props.text }
		</div>
	)
}

export default connect(Notify)
