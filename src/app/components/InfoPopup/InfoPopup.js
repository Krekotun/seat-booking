import React from 'react';
import cx from 'classnames'

const InfoPopup = (props) => {
	let klass = cx("iquiz_tables--info_popup", "iquiz_tables--popup", {
		'-show': props.isOpened
	})

	let style = {
		top: props.position.y,
		left: props.position.x
	}

	return (
		<div
			className={ klass } style={ style }
		>
			<div className="iquiz_tables--table_info">{ props.team }</div>
		</div>
	)
}

export default InfoPopup
