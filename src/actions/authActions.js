import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_TEMP = 'LOGOUT_TEMP'

export const login = props => dispatch => {
	console.log('lact', props)
	const data = {
		username: props.username,
		password: props.password,
	}
	dispatch({ type: LOGIN_START })
	axios
		.post('https://potluck-planner-07.herokuapp.com/api/auth/login', data)
		.then(res => {
			console.log(res.data)

			dispatch({ type: LOGIN_SUCCESS, payload: res.data })
		})
		.catch(error => {
			dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
		})

	// return { type: LOGIN }
}

export const logout = () => {
	return { type: LOGOUT }
}
