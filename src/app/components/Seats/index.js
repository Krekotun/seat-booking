import React, { Component } from 'react';
import connect from './connect'
import Seat from 'components/Seat'

class Seats extends Component {
	constructor(props) {
		super(props);

		this.handleDocumentClick = this.handleDocumentClick.bind(this)
	}

	componentDidMount() {
		console.log('seats')
		this.infoPopup = document.querySelector('.iquiz_tables--info_popup')
		this.formPopup = document.querySelector('.iquiz_tables--form')
		document.addEventListener('click', this.handleDocumentClick, true)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, true)
	}

	handleDocumentClick(e) {
		let target = e.target

		if (target === this.infoPopup || this.infoPopup.contains(target) ||
				target === this.formPopup || this.formPopup.contains(target) ) {
			return
		}

		this.props.actions.closeFormPopup()
		this.props.actions.closeInfoPopup()
	}

	render() {
		let seats = this.props.seats

		return (
			<div>

				{
					seats && seats.map((seat, i) => {
						return (
							<Seat
								key={ i }
								seat={seat}
								actions={ this.props.actions }/>
						)
					})
				}

			</div>
		)
	}
}

export default connect(Seats)
