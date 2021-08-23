import React from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import CreateAnEvent from './CreateEvent';
import FoodList from './FoodList';
import HomePage from './HomePage';



function App() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image 
            alt='potluck' 
            src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f958.svg'
            style={{width: '40px', height: '40px', marginRight: '12px'}}
            />
          Potluck
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/create-an-event">Create an Event</Nav.Link>
          <Nav.Link href="/food-list">Food List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/user-dashboard">Dashboard</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/food-list' component={FoodList} />
          <Route path='/create-an-event' component={CreateAnEvent} />
        </Switch>
      </AuthProvider>
      <Container 
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}
      >
        {/* this makes sure that it will always be 400px, the wider it gets, it wont go over 400, and smaller adds padding to the sides */}
        <div className='w-100' style={{ maxWidth: '400px' }}> 
          <Router>
            <AuthProvider>
              {/* wrapped everything with AuthProvider to make sure we have access to that context  */}
              <Switch>
                <PrivateRoute path ='/user-dashboard' component={Dashboard} />
                <PrivateRoute path ='/update-profile' component={UpdateProfile} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
      </>
  )
}

export default App;
