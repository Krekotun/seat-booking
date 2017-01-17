import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from 'store'

import Loading from 'components/Loading'
import Area from 'components/Area'
import Pagination from 'components/Pagination'
import * as gameActions from 'store/modules/game'

import './old.css'


class App extends Component {
	componentWillMount() {
		
		let gameData = JSON.parse( document.getElementById('app').getAttribute('data-game') )

		store.dispatch(
			gameActions.setGameData(
				gameData.num,
				gameData.type
			)
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
