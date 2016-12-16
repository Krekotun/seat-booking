import React from 'react';
import { connect } from 'react-redux'
import cx from 'classnames'

const Loading = (props) => {
	let klass = cx('iquiz_tables--loading', {
		'-show': props.loading
	})

	return (
		<div className={ klass }>Loading</div>
	)
}

export default connect(function(state) {
	console.log(state.loading);
	return {
		loading: state.loading
	}
})(Loading)
