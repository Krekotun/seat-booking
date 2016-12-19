import React from 'react';
import connect from './connect'
import Seat from 'components/Seat'

const Seats = (props) => {
	let seats = props.seats

	const handleSeatClick = (target, seat) => {
		let rootElRect = document.querySelector('.iquiz_tables--area').getBoundingClientRect()
		let targetRect = target.getBoundingClientRect()

		let position = {
			x: (targetRect.left - rootElRect.left) + targetRect.width/2,
			y: targetRect.top - rootElRect.top
		}

		props.actions.closeInfoPopup()
		props.actions.closeFormPopup()

		if (seat.admins) return

		if (seat.reserved) {
			props.actions.openInfoPopup(seat.team, position)
		} else {
			props.actions.openFormPopup(seat, position)
		}
	}

	return (
		<div>

			{
				seats && seats.map((seat, i) => {
					return (
						<Seat
							key={ i }
							onClick={ (e) => handleSeatClick(e.currentTarget, seat) }
							{...seat} />
					)
				})
			}

		</div>
	)
}

export default connect(Seats)
