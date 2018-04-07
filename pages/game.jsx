import React from 'react'
import App from '../src/app/containers/App'


class Game extends React.Component {
	static async getInitialProps ({query}) {

		return {
			gameId: query.id
		}
	}

	render () {
		const gameId = this.props.gameId

		return (<App gameId={gameId}/>)
	}
}

export default Game
