import React from 'react';

const Pagination = (props) => {
	const actions = props.actions

	return (

		<nav className="iquiz_tables--nav">
			<button
				className={ props.pagination === 1 ? '-active' : '' }
				onClick={ () => actions.setPage(1) }
			>
				1
			</button>

			<button
				className={ props.pagination === 2 ? '-active' : '' }
				onClick={ () => actions.setPage(2) }
			>
				2
			</button>
		</nav>
	)
}

export default Pagination
