import React from 'react';

const Team = (props) => {
	return (
		<button className="iquiz_tables--table_opener">
			<strong className="iquiz_tables--table_num">
				{props.tableId }
			</strong>
		</button>
	)
}

export default Team
