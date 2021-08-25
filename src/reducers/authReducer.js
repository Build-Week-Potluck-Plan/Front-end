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
			localStorage.setItem('id', action.payload.user_id)

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
			localStorage.removeItem('id')

			return { ...state, token: null }
		}
		default:
			const token = localStorage.getItem('token')
			const id = localStorage.getItem('id')

			return { ...state, token: token, user_id: id }
		// return state
	}
}
export default reducer
