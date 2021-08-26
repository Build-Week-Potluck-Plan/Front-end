import React from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Switch, Route, NavLink } from 'react-router-dom'
import Profile from './Profile/Profile'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './Profile/UpdateProfile'
import CreateAnEvent from './Events/CreateEvent'
import FoodList from './Events/FoodList'
import HomePage from './HomePage'
import Navigation from './nav/Navigation'

function App() {
	return (
		<>
			<Navigation />

			<Switch>
				<PrivateRoute path='/user-profile' component={Profile} />
				<PrivateRoute path='/update-profile' component={UpdateProfile} />
				<Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/forgot-password' component={ForgotPassword} />
				<Route exact path='/' component={HomePage} />
				<Route path='/food-list' component={FoodList} />
				<Route path='/create-an-event' component={CreateAnEvent} />
			</Switch>

			{/* <Container 
          className='d-flex align-items-center justify-content-center'
          style={{minHeight: '100vh'}}
        > */}
			{/* this makes sure that it will always be 400px, the wider it gets, it wont go over 400, and smaller adds padding to the sides */}
			{/* <div className='w-100' style={{ maxWidth: '400px' }}>  */}
			{/* </div>
        </Container> */}
		</>
	)
}

export default App
