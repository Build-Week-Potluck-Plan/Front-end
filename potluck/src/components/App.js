import React from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import CreateAnEvent from './CreateEvent';
import FoodList from './FoodList';

function App() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="/">PotLuck</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/create-an-event">Create an Event</Nav.Link>
        <Nav.Link href="/food-list">Food List</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/user-dashboard">Dashboard</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/food-list' component={FoodList} />
          <Route path='/create-an-event' component={CreateAnEvent} />
        </Switch>
      </AuthProvider>
    </Router>
      <Container 
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path ='/user-dashboard' component={Dashboard} />
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
