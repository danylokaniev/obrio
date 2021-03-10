  
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import actionHandlers from './actionHandlers'

 const initialState = {
		currentPage: 1,
		data: [],
		planetById: {},
		error: {},
		loader: false,
		planetsOnPage: 10,
 }


function reducer(state = initialState, action) {
	const handler = actionHandlers[action.type] ?? actionHandlers.__default__;
	return handler(state, action);
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store