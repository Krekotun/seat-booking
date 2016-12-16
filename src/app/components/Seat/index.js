import React from 'react';
import cx from 'classnames'

const Seat = (props) => {
	let klass = cx(
		'iquiz_tables--table',
		`-n_${props.tableId}`,
		{
			'-reserved': props.isReserved
		}
	)

	return (
		<div className={ klass }>
			<div className="iquiz_tables--table_inner">
				<button className="iquiz_tables--table_opener">
					<strong class="iquiz_tables--table_num">
						{ props.tableId }
					</strong>
				</button>
			</div>
		</div>
	)
}

export default Seat
