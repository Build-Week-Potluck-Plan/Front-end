import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css' //importing bootstrap styles
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import thunk from 'redux-thunk'

import reducer from './reducers/authReducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
