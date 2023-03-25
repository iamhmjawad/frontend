import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import hero from '../assets/hero.png'

function LoginPage() {
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
            <Form className='d-flex flex-column'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  className='w-100 mb-3'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  className='w-100 mb-3'
                />
              </Form.Group>
              <a href='#!' className='my-3'>
                Forgot password?
              </a>
              <Button variant='primary' className='mb-3'>
                Login
              </Button>

              <p className='mt-3'>
                Don't have an account?{' '}
                <a href='#!' className=''>
                  Sign up
                </a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
