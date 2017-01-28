import React from 'react';
import appState from 'store'
import { Provider } from 'react-redux'
import App from 'components/App'


const Root = () => (
	<Provider store={ appState }>
		<App />
	</Provider>
)


export default Root
