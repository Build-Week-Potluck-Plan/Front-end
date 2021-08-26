//get all users
//get user by id
//update user by id
//delete user by id

//1. create and export initialState
//2. add member into our initialState
//3. create a reducer function
//4. add in case ADD_NEW_MEMBER
//5. add in a default case
//6. export out reducer
import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START, SET_USER } from '../actions/userActions'

const initialState = {
	user: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isFetching: true,
				error: '',
				user: null,
			}
		case FETCH_SUCCESS:
			return {
				...state,
				user: action.payload,
				isFetching: false,
			}
		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
				isFetching: false,
				user: null,
			}
		case SET_USER:
			return {
				initialState,
			}
		default:
			return state
	}
}
export default reducer
