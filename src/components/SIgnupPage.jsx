import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import hero from '../assets/hero.png'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something with the form data
  }
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6} className='d-flex align-items-center'>
          <div>
            <img src={hero} alt='' className='img-fluid' />
            {/* <p className='lead text-center'>
              BlueSpace is an online WebApp which helps you connect with new
              People!
            </p> */}
          </div>
        </Col>
        <Col md={6} className='bg-white  mt-4'>
          <div className='p-5'>
            <Form onSubmit={handleSubmit} className='d-flex flex-column'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className='mb-3'
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formBasicUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className='mb-3'
                  type='text'
                  placeholder='Enter username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className='mb-3'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formBasicConfirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className='mb-3'
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='mt-3'>
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SignupPage
