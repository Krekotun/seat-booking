import React, { Component } from 'react';
import './old.css'
import Loading from 'components/Loading'
import { Provider } from 'react-redux'
import store from '../../store.js'


class App extends Component {
	componentDidMount() {
		setTimeout(() => {
			store.dispatch({
				type: 'SET_LOADING',
				payload: true
			})

			setTimeout(() => {
				store.dispatch({
					type: 'SET_LOADING',
					payload: false
				})

				console.log(1);

			}, 2000)

		}, 1000)
	}

	render() {
		return (
			<Provider store={ store }>
				<div className="iquiz_tables">
					<Loading />
					<div className="iquiz_tables--inner">

					</div>
				</div>
			</Provider>
		)
	}
}

export default App
