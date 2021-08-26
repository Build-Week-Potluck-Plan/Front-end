import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions/userActions'

const Signup = props => {
	const emailRef = useRef()
	const usernameRef = useRef()
	const nameRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { signup } = useState()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault() // prevents form from refreshing

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match')
			//we return bec we want to exit out of the func right away
		}

		try {
			setError('') // setting to empty string so we have no error
			setLoading(true) // in case the user spams the button, this will prevent it from making multiple accounts
			// await signup(emailRef.current.value, passwordRef.current.value)
			props.register({
				email: emailRef.current.value,
				username: usernameRef.current.value,
				name: nameRef.current.value,
				password: passwordRef.current.value,
			})
			history.push('/')
		} catch {
			setError('Failed to create an account')
		}

		setLoading(false)
	}

	return (
		<>
			<Container
				className='d-flex align-items-center justify-content-center'
				style={{ minHeight: '100vh' }}>
				<div className='w-100' style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className='text-center mb-4'>Sign up</h2>
							{error && <Alert variant='danger'>{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<Form.Group id='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' ref={emailRef} required />
								</Form.Group>
								<Form.Group id='username'>
									<Form.Label>Username</Form.Label>
									<Form.Control type='text' ref={usernameRef} required />
								</Form.Group>
								<Form.Group id='name'>
									<Form.Label>Name</Form.Label>
									<Form.Control type='text' ref={nameRef} required />
								</Form.Group>
								<Form.Group id='password'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' ref={passwordRef} required />
								</Form.Group>
								<Form.Group id='password-confirm'>
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type='password' ref={passwordConfirmRef} required />
									{/* emailRef, passwordRef, and passwordConfirmRef is so we can get the value when we submit our form */}
								</Form.Group>
								<Button disabled={loading} className='w-100' type='submit'>
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						Already have an account? <Link to='/login'>Log in</Link>
					</div>
				</div>
			</Container>
		</>
	)
}
function mapStateToProps(state) {
	console.log('l state', state)
	return {
		state,
	}
}

export default connect(mapStateToProps, { register })(Signup)
