import React, { Component } from 'react';
import cx from 'classnames'

// const Loading = (props) => {
// 	console.log(1);
// 	let klass = cx('iquiz_tables--loading', {
// 		'-show': props.loading
// 	})
//
// 	return (
// 		<div className={ klass }>Loading</div>
// 	)
// }

class Loading extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		console.log(1);

		return true
	}
	render() {

		let klass = cx('iquiz_tables--loading', {
			'-show': this.props.loading
		})

		return (
			<div className={ klass }>Loading</div>
		)
	}
}

export default Loading
