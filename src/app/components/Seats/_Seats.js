
const isInfoPopup = (target) =>
	target === this.infoPopup || this.infoPopup.contains(target)

const closePopup = (node) =>
 isInfoPopup(node) || isFormPopup(node)
 	 ? { close: true }
	 : { close: false }


expect(closePopup()).to.equals({closed: true})

const closePopups = target, actions => {
	if (isInfoPopup(target)||
			target === this.formPopup || this.formPopup.contains(target) ) {
		return
	}

	this.props.actions.closeFormPopup()
	this.props.actions.closeInfoPopup()

	return {}
}

class Seats extends Component {
	constructor(props) {
		super(props);

		this.handleDocumentClick = this.handleDocumentClick.bind(this)
	}

	componentDidMount() {
		loadSeatsData()
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, true)
	}

	handleClick = (e) => {
		actions.closePopupAction(
			closePopup(e.target)
		)
	}

	handleDocumentClick(e) {
		closePopups(e.target)
	}

	render() {
		let seats = this.props.seats

		return (
			<div>

				{
					<ComponentList
						items={ items }
						renderChild={ <Seat> }
							/>
							seats && seats.map((seat, i) => {
								React.cloneElement(
									child,
									{id: id, index: index}
								)								return (
									<Seat
										key={ i }
										seat={seat}
										onClick={ this.handleClick }
										actions={ this.props.actions }/>
						)
					})
				}

			</div>
		)
	}
}
