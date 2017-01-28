import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer as RHWrapper } from 'react-hot-loader'
import App from 'containers/App'

function withRHL( RootElement ) {
	render(
		<RHWrapper>
			<RootElement />
		</RHWrapper>,
		document.querySelector('#app')
	);
}

withRHL(App)

if (module.hot) {
	module.hot.accept('containers/App', () => {
		const rootEl = require('containers/App').default
		withRHL( rootEl )
	});
}
