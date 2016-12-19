import React from 'react';
import connect from './connect'
import Seat from 'components/Seat'

const Seats = (props) => {
	let seats = props.seats

	const handleSeatClick = (target, seat) => {
		let width = target.offsetWidth
		let height = target.offsetHeight


		let rootElRect = document.querySelector('.iquiz_tables--area').getBoundingClientRect()
		let targetRect = target.getBoundingClientRect()

		let offsetY = targetRect.top - rootElRect.top
		let offsetX = targetRect.left - rootElRect.left

		props.actions.closeInfoPopup()

		if (seat.admins) return

		props.actions.openInfoPopup(seat.team, {
			x: (offsetX + targetRect.width/2) || 0,
			y: offsetY || 0
		})
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
