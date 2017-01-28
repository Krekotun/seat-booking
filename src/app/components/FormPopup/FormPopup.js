import React, { Component } from 'react';
import cx from 'classnames'
import Form from './Form'

class FormPopup extends Component {
	constructor(props) {
		super(props);

		this.popupHeight = 0;
	}

	componentDidMount() {
		this.popupHeight = this.node.getBoundingClientRect().height;
	}

	render() {
		let { isOpened, isLoading, position } = this.props;

		let klass = cx("iquiz_tables--form", "iquiz_tables--popup", {
			'-show': isOpened,
			'-loading': isLoading,
			'-flip': position.y - (this.popupHeight + 10) <= 0
		})

		let style = {
			top: position.y,
			left: position.x
		}

		return (
			<div
				className={ klass }
				style={ style }
				ref={ (node) => { this.node = node } }
			>
				<Form />
			</div>
		)
	}
}

export default FormPopup
