import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { getUser, fetchFail } from '../../actions/userActions'

import { connect } from 'react-redux'
import { logout, login } from '../../actions/authActions'

const Profile = props => {
	// console.log(props.user_id)
	const [error, setError] = useState('')

	const history = useHistory()
	async function handleLogout() {
		setError('')
		try {
			props.logout()
			history.push('/login')
		} catch {
			setError('Failed to log out')
		}
	}
	return (
		<>
			{props.user && (
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Profile</h2>
						{/* In case our login fails */}
						{error && <Alert variant='danger'>{error}</Alert>}
						<strong>Email: </strong> {props.user.email}
						<br></br>
						<strong>Name: </strong> {props.user.name}
						<Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
							Update Profile
						</Link>
					</Card.Body>
				</Card>
			)}
			<div className='w-100 text-center mt-2'>
				<Button variant='link' onClick={handleLogout}>
					Log out
				</Button>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	console.log('dash state', state)
	return {
		user: state.userReducer.user,
		user_id: state.authReducer.user_id,
	}
}

export default connect(mapStateToProps, { getUser, fetchFail, login, logout })(Profile)
