import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

//this is a wrapper for our current route
//the render here checks to see if we have a current user
//if we have a current user, then we want to render out the component that got passed in
//if we dont have a current user, we dont want them viewing so we redirect them to the login page

export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useState()

	return (
		<Route
			{...rest}
			render={props => {
				return currentUser ? <Component {...props} /> : <Redirect to='/login' />
			}}></Route>
	)
}
