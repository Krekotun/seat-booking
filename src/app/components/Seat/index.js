import React, { Component } from 'react';
import cx from 'classnames'
import Team from './Team'
import Admins from './Admins'

class Seat extends Component {
	constructor(props) {
		super()
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		let target = e.currentTarget
		let seat = this.props.seat
		let position = {}
		let el = this.container

		if (!el.contains(e.target) || seat.admins) return

		// console.log(e.target, e.currentTarget, el);

		let rootElRect = document.querySelector('.iquiz_tables--area').getBoundingClientRect()
		let targetRect = this.container && this.container.getBoundingClientRect()

		if (targetRect) {
			position = {
				x: (targetRect.left - rootElRect.left) + targetRect.width/2,
				y: targetRect.top - rootElRect.top
			}
		}

		if (seat.reserved) {
			this.props.actions.openInfoPopup(seat.team, position)
		} else {
			this.props.actions.openFormPopup(seat, position)
		}
	}

	componentDidMount() {
		// document.addEventListener('click', this.handleClick, true)
	}

	componentWillUnmount() {
		// document.removeEventListener('click', this.handleClick, true)
	}

	render() {
		let klass = cx(
			'iquiz_tables--table',
			`-n_${this.props.seat.table_id}`,
			{
				'-org': this.props.seat.admins,
				'-reserved': this.props.seat.reserved
			}
		)

		return (
			<div
				className={ klass }
				ref={ref => this.container = ref}
				onClick={ this.handleClick }
			>
				<div className="iquiz_tables--table_inner">

					{ this.props.seat.admins === true ?
						<Admins /> :
						<Team table_id={ this.props.seat.table_id } />
					}

				</div>
			</div>
		)
	}
}

export default Seat
