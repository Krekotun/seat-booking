import React, { Component } from 'react';
import Loading from 'components/Loading'
import Area from 'components/Area'
import Pagination from 'components/Pagination'
import Notify from 'components/Notify'

import './styles/index.styl'

const loadInitailData = (actions) => {
	let gameData = JSON.parse( document.getElementById('app').getAttribute('data-game') )
	let { num, type } = gameData

	actions.setGameData(num, type)
}

class App extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);

		return true
	}

	componentWillMount() {
		loadInitailData(this.props.actions)
	}

	render() {
		return (
			<div className="iquiz_tables -qnq">

				<Area />

				<Pagination />

				<Loading />

				<Notify />

			</div>
		)
	}
}

export default App
