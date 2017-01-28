import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from 'store'

import Loading from 'components/Loading'
import Area from 'components/Area'
import Pagination from 'components/Pagination'
import Notify from 'components/Notify'
import * as gameActions from 'store/modules/game'
import * as notifyActions from 'store/modules/notify'

import './styles/index.styl'

const loadInitailData = () => {
	let gameData = JSON.parse( document.getElementById('app').getAttribute('data-game') )

	store.dispatch(
		gameActions.setGameData(
			gameData.num,
			gameData.type
		)
	)
}

class App extends Component {
	componentWillMount() {
		loadInitailData()
	}

	render() {
		return (
			<Provider store={ store }>
				<div className="iquiz_tables -qnq">

					<div className="iquiz_tables--inner">
						<Area />
					</div>

					<Pagination />

					<Loading />

					<Notify />

				</div>
			</Provider>
		)
	}
}

export default App
