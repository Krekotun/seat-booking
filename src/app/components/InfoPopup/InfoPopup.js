import React, { Component } from 'react';
import cx from 'classnames'
import { getPopupPositionStyle } from 'helpers'

class InfoPopup extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.isOpened !== this.props.isOpened
	}

	render() {
		let { isOpened, position, team } = this.props;

		let klass = cx("iquiz_tables--info_popup", "iquiz_tables--popup", {
			'-show': isOpened
		})

		return (
			<div
				className={ klass }
				style={ getPopupPositionStyle(position) }
			>

				<div className="iquiz_tables--table_info">{ team }</div>

			</div>
		)
	}
}

export default InfoPopup
