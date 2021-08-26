import React, { useState, useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, login } from '../actions/authActions'

import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

const Dashboard = props => {
	console.log(props.user_id)
	const [error, setError] = useState('')
	const [currentUser, setCurrentUser] = useState()
	const history = useHistory()
	useEffect(() => {
		axiosWithAuth()
			.get(`users/${props.user_id}`)
			.then(res => setCurrentUser(res.data))
			.catch(err => {
				console.log(err.message)
			})
	}, [])

	async function handleLogout() {
		setError('')
		try {
			props.logout()
			history.push('/login')
		} catch {
			setError('Failed to log out')
		}
	}
	console.log(currentUser)
	return (
		<>
			{currentUser && (
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Profile</h2>
						{/* In case our login fails */}
						{error && <Alert variant='danger'>{error}</Alert>}
						<strong>Email: </strong> {currentUser.email}
						<br></br>
						<strong>Name: </strong> {currentUser.name}
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
		user_id: state.user_id,
	}
}

export default connect(mapStateToProps, { logout, login })(Dashboard)
