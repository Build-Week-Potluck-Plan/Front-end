import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { getUser, updateUser } from '../../actions/userActions'

import { connect } from 'react-redux'
import { logout, login } from '../../actions/authActions'

const UpdateProfile = props => {
	const emailRef = useRef()
	const nameRef = useRef()
	const usernameRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { currentUser, updatePassword, updateEmail } = useState()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	function handleSubmit(e) {
		e.preventDefault()
		console.log({ username: usernameRef.current.value })
		// props.updateUser({ username: usernameRef.current.value })
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match')
		}

		// const promises = []
		setLoading(true)
		setError('')

		if (emailRef.current.value !== props.user.email) {
			props.updateUser({ user_id: props.user_id, email: emailRef.current.value })
		}
		if (usernameRef.current.value !== props.user.username) {
			props.updateUser({ user_id: props.user_id, username: usernameRef.current.value })
		}
		if (nameRef.current.value !== props.user.name) {
			props.updateUser({ user_id: props.user_id, name: nameRef.current.value })
		}

		// if (passwordRef.current.value) {
		// 	props.updateUser({ user_id: props.user_id, password: passwordRef.current.value })
		// }

		// Promise.all(promises)
		// 	.then(() => {
		// 		history.push('/')
		// 		//runs whenever the promises actually execute if they are all successful
		// 	})
		// 	.catch(() => {
		// 		setError('Failed to update account')
		// 		//if it has an error
		// 	})
		// 	.finally(() => {
		// 		setLoading(false)
		// 		//this finally will set our loading back to false and will run if we succeed or fail
		// 	})
	}

	return (
		<>
			{props.user && (
				<Card>
					<Card.Body>
						<h2 className='text-center mb-4'>Update Profile</h2>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' ref={emailRef} required defaultValue={props.user.email} />
							</Form.Group>
							<Form.Group id='username'>
								<Form.Label>Username</Form.Label>
								<Form.Control type='text' ref={usernameRef} required defaultValue={props.user.username} />
							</Form.Group>
							<Form.Group id='name'>
								<Form.Label>Name</Form.Label>
								<Form.Control type='text' ref={nameRef} required defaultValue={props.user.name} />
							</Form.Group>
							<Form.Group id='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									ref={passwordRef}
									placeholder='Leave blank to keep the same'
								/>
							</Form.Group>
							<Form.Group id='password-confirm'>
								<Form.Label>Password Confirmation</Form.Label>
								<Form.Control
									type='password'
									ref={passwordConfirmRef}
									placeholder='Leave blank to keep the same'
								/>
							</Form.Group>
							<Button variant='success' disabled={loading} className='w-100' type='submit'>
								Update
							</Button>
						</Form>
					</Card.Body>
				</Card>
			)}
			<div className='w-100 text-center mt-2'>
				<Link to='/'>Cancel</Link>
				<br></br>
				<Button variant='danger' disabled={loading} className='w-10' type='submit'>
					Delete Profile
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

export default connect(mapStateToProps, { getUser, updateUser })(UpdateProfile)
