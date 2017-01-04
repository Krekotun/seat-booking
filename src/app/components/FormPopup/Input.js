import React from 'react';

function Input(props) {

	const { input, type, label, meta: {touched, error} } = props
	let klass = touched && error ? '-error' : ''

	return (
		<label>
			<input
				type={ type }
				{...input}
				placeholder={ label }
				className={ klass } />

			{/* { touched && (error && <span>{ error }</span>) } */}
		</label>

	)
}

export default Input
