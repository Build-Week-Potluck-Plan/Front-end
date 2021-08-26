import axios from 'axios'

function axiosWithAuth() {
	const token = localStorage.getItem('token')
	console.log(token)
	return axios.create({
		headers: {
			authorization: token,
		},
		baseURL: `https://potluck-planner-07.herokuapp.com/api`,
	})
}

export default axiosWithAuth
