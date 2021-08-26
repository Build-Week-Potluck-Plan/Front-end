import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getUser, fetchFail, setUser } from '../../actions/userActions'
import { login } from '../../actions/authActions'

const Navigation = props => {
	useEffect(() => {
		if (props.user_id > 0) {
			props.getUser(props.user_id)
		} else {
			props.setUser()
		}
	}, [props.user_id])

	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand as={NavLink} to='/'>
						<Image
							to='/'
							alt='potluck'
							src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f958.svg'
							style={{ width: '40px', height: '40px', marginRight: '11px' }}
						/>
						Potluck
					</Navbar.Brand>
					{props.isLoggedIn && (
						<Nav className='me-auto'>
							<Nav.Link as={NavLink} to='/create-an-event'>
								Create an Event
							</Nav.Link>
							<Nav.Link as={NavLink} to='/food-list'>
								Food List
							</Nav.Link>
						</Nav>
					)}
					<Nav>
						<Nav.Link as={NavLink} to='/user-profile'>
							{props.user ? `Profile: ${props.user.username}` : 'login'}
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

const mapStateToProps = state => {
	console.log('dash state', state)
	return {
		user: state.userReducer.user,
		user_id: state.authReducer.user_id,
		success: state.authReducer.success,
		isLoggedIn: state.authReducer.isLoggedIn,
	}
}

export default connect(mapStateToProps, { getUser, fetchFail, login, setUser })(Navigation)
