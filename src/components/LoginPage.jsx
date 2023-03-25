// useState and useEffect hooks are imported from react for component state management.
// axios is used to make http requests to the backend API.
// react-bootstrap is imported to create UI components in the application.
// hero.png and Link are imported from their respective files.
// Navigate is imported from react-router-dom for navigation functionality.
// useState hook is used to manage form submission state.
// useState hook is used to manage username and password state.
// useState hook is used to manage error state.
// handleUsernameChange function is used to update username state based on user input.
// handlePasswordChange function is used to update password state based on user input.
// handleLoginSubmit function is used to handle login form submission.
// The component makes a post request to the backend API with the provided username and password.
// If the request is successful, the user object is stored in local storage and the form submission state is updated.
// If the request fails, an error message is displayed.

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import hero from '../assets/hero.png'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function LoginPage() {
  const [items, setItems] = useState({})

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    // Send data to backend API for authentication
    axios
      .post('http://localhost:5000/login', { username, password })
      .then((response) => {
        setItems(response.data.user)
        setFormSubmitted(true)
      })
      .catch((error) => {
        setError('Username or Password incorrect')
      })
  }
  // If authentication is successful, redirect to homepage
  if (formSubmitted) return <Navigate to='/home' />
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6} className='d-flex align-items-center'>
          <div>
            <img src={hero} alt='' className='img-fluid' />
          </div>
        </Col>
        <Col md={6} className='bg-white  mt-4'>
          <div className='p-5'>
            <Form className='d-flex flex-column'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  className='w-100 mb-3'
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  className='w-100 mb-3'
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <a href='#!' className='my-3'>
                Forgot password?
              </a>
              <Button
                variant='primary'
                className='mb-3'
                onClick={handleLoginSubmit}
              >
                Login
              </Button>

              <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign up!</Link>
              </p>
              {error && <p>{error}</p>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
