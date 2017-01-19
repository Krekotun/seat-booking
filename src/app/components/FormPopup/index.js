import React from 'react';
import connect from './connect'
import cx from 'classnames'
import Form from './Form'

const FormPopup = (props) => {

	let klass = cx("iquiz_tables--form", "iquiz_tables--popup", {
		'-show': props.isOpened,
		'-loading': props.isLoading
	})

	let style = {
		top: props.position.y,
		left: props.position.x
	}

	return (
		<div
			className={ klass }
			style={ style }
		>
			<Form />
		</div>
	)
}

export default connect(FormPopup)
