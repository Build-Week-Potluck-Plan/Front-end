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
				<PrivateRoute path='/create-an-event' component={CreateAnEvent} />
			</Switch>
		</>
	)
}

export default App
