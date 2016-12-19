import React, { Component } from 'react';
import './old.css'
import Loading from 'components/Loading'
import { Provider } from 'react-redux'
import store from '../../store.js'
import Area from 'components/Area'
import Pagination from 'components/Pagination'
import seats from './seats.hjson'


class App extends Component {
	componentDidMount() {

		store.dispatch({
			type: 'SET_LOADING',
			payload: true
		})

		setTimeout(() => {
			store.dispatch({
				type: 'SET_FETCHED_SEATS',
				payload: seats
			})
			store.dispatch({
				type: 'SET_LOADING',
				payload: false
			})
		}, 1000)

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
