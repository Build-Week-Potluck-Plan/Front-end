import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/authActions'

const initialState = {
	username: '',

	token: null,
	error: null,
	isLoading: false,
}

export default function Reducer(state = initialState, action) {
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
				isLoading: false,
				error: null,
			}
		}
		case LOGIN_FAIL: {
			return { ...state, error: action.payload, isLoading: false }
		}

		case LOGOUT: {
			return { ...state, token: null }
		}
		default: {
			const USER_CURRENT_TOKEN = localStorage.getItem('token')
			return { ...state, token: USER_CURRENT_TOKEN }
		}
	}
}
