// import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_USER = 'FETCH_USER'

export const getUser = props => {
	console.log('lact', props)
	return dispatch => {
		dispatch(fetchStart())
		axiosWithAuth()
			.get(`users/${props}`)
			.then(res => {
				dispatch({ type: FETCH_SUCCESS, payload: res.data })
			})

			.catch(error => {
				dispatch({ type: FETCH_FAIL, payload: error.response.data.message })
			})

		// return { type: LOGIN }
	}
}

export const FETCH_START = 'FETCH_START'
export const fetchStart = () => {
	return { type: FETCH_START }
}
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess = fact => {
	return { type: FETCH_SUCCESS, payload: fact }
}

export const FETCH_FAIL = 'FETCH_FAIL'
export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error }
}
export const SET_USER = 'SET_USER'
export const setUser = user => {
	return { type: SET_USER }
}
