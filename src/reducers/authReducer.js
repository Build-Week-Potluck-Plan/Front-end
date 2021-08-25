import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/authActions'

const initialState = {
	token: null,
	user_id: null,
	error: null,
	isLoading: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START: {
			return { ...state, isLoading: true, error: null }
		}
		case LOGIN_SUCCESS: {
			console.log(action.payload)
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				token: action.payload.token,
				user_id: action.payload.user_id,
				isLoading: false,
				error: null,
			}
		}
		case LOGIN_FAIL: {
			return { ...state, error: action.payload, isLoading: false }
		}

		case LOGOUT: {
			localStorage.removeItem('token')
			return { ...state, token: null }
		}
		default:
			// const USER_CURRENT_TOKEN = localStorage.getItem('token')
			// return { ...state, token: USER_CURRENT_TOKEN }
			return state
	}
}
export default reducer
