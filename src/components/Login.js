import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import axios from 'axios'
//getUser reducer
const initialCredentials = {
	username: '',
	password: '',
}

const Login = props => {
	const [credentials, setCredentials] = useState(initialCredentials)

	const emailRef = useRef()
	const passwordRef = useRef()
	// const { login } = useState()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		console.log(props)
		try {
			e.preventDefault()
			await props.login({
				username: emailRef.current.value,
				password: passwordRef.current.value,
			})
		} catch {
			setError('Failed to login')
		}
		history.push('/')
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Log in</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label>Username</Form.Label>
							<Form.Control type='text' ref={emailRef} />
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' ref={passwordRef} required />
						</Form.Group>
						<Button disabled={loading} className='w-100' type='submit'>
							Log in
						</Button>
					</Form>
					<div className='w-100 text-center mt-2'>
						<Link to='/forgot-password'>Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign up</Link>
			</div>
		</>
	)
}
function mapStateToProps(state) {
	console.log('l state', state)
	return {
		user_id: state.user_id,
		error: state.error,
		token: state.token,
	}
}

export default connect(mapStateToProps, { login })(Login)
