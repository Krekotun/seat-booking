import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../../store.js'
import {
	getSeats,
	setGameData
} from '../../actions'

import Loading from 'components/Loading'
import Area from 'components/Area'
import Pagination from 'components/Pagination'

import './old.css'


class App extends Component {
	componentDidMount() {

		this.bootstrap()

	}

	bootstrap() {
		let gameData = JSON.parse( document.getElementById('app').getAttribute('data-game') )

		store.dispatch(
			setGameData(
				gameData.num,
				gameData.type
			)
		)

		let state = store.getState()

		store.dispatch(
			getSeats(state.game.num, state.game.type)
		)
	}

	render() {
		return (
			<Provider store={ store }>
				<div className="iquiz_tables -qnq">
					<Loading />

					<div className="iquiz_tables--inner">
						<Area />
					</div>

					<Pagination />

				</div>
			</Provider>
		)
	}
}

export default App
