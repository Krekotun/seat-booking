import { createStore, applyMiddleware } from 'redux'
import reducers from 'store/modules'
import thunk from 'redux-thunk'

const store = createStore(
	reducers,
	applyMiddleware(thunk)
)

if (module.hot) {
	module.hot.accept('store/modules', () => {
		store.replaceReducer(require('store/modules').default)
	});
}

export default store
