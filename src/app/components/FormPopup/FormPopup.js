import React, { Component } from 'react';
import cx from 'classnames'
import Form from './Form'

const shouldPopupFlip = (positionY, popupHeight) =>
	positionY - (popupHeight + 10) <= 0

const getStyle = (position) => ({
	top: position.y,
	left: position.x
})

class FormPopup extends Component {
	constructor(props) {
		super(props);

		this.popupHeight = 0;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.isLoading !== this.props.isLoading ||
			nextProps.isOpened !== this.props.isOpened
		)
	}

	componentDidMount() {
		this.popupHeight = this.node.getBoundingClientRect().height;
	}

	render() {
		let { isOpened, isLoading, position } = this.props;

		let klass = cx("iquiz_tables--form", "iquiz_tables--popup", {
			'-show': isOpened,
			'-loading': isLoading,
			'-flip': shouldPopupFlip(position.y, this.popupHeight)
		})

		return (
			<div
				className={ klass }
				style={ getStyle(position) }
				ref={ (node) => { this.node = node } }
			>
				<Form />
			</div>
		)
	}
}

export default FormPopup
