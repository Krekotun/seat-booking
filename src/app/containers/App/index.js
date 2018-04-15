import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Loading from 'components/Loading'
import Area from 'components/Area'
import Pagination from 'components/Pagination'
import Notify from 'components/Notify'
import * as notifyActions from 'store/modules/notify'
import store from 'store'


class App extends Component {
	componentDidMount() {

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
