import React from 'react'
import App from '../src/app/containers/App'
import { getSeats } from 'store/modules/seats'
import store from 'store'
import { setGameData } from 'store/modules/game'


class Game extends React.Component {
	static async getInitialProps({query}) {
		return {
			gameId: query.id
		}
	}

	componentDidMount ()  {
		const gameId = this.props.gameId
		store.dispatch(setGameData(gameId))
		store.dispatch(getSeats(gameId))
	}

	render () {
		const gameId = this.props.gameId

		return (<App gameId={gameId}/>)
	}
}

export default Game
