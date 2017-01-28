import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer as ReactHotWrapper } from 'react-hot-loader'
import Root from 'components/Root'

function withReactHotLoader( RootElement ) {
	render(
		<ReactHotWrapper>
			<RootElement />
		</ReactHotWrapper>,
		document.querySelector('#app')
	);
}

withReactHotLoader(Root)

if (module.hot) {
	module.hot.accept('components/Root', () => {
		const rootEl = require('components/Root').default
		withReactHotLoader( rootEl )
	});
}
