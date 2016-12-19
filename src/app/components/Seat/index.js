import React from 'react';
import cx from 'classnames'
import Team from './Team'
import Admins from './Admins'

const Seat = (props) => {
	let klass = cx(
		'iquiz_tables--table',
		`-n_${props.table_id}`,
		{
			'-org': props.admins,
			'-reserved': props.reserved
		}
	)

	return (
		<div className={ klass } onClick={ props.onClick }>
			<div className="iquiz_tables--table_inner">

				{ props.admins === true ?
					<Admins /> :
					<Team table_id={ props.table_id } />
				}

			</div>
		</div>
	)
}

export default Seat
