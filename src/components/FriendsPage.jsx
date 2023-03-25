/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Button } from 'react-bootstrap'

function FriendsPage() {
  return (
    <Container>
      <Row className='d-flex justify-content-center  mt-4'>
        <Col md={8}>
          <div className='people-nearby '>
            <div className='nearby-user bg-dark px-5 rounded-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2} sm={2}>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='user'
                    className='profile-photo-lg'
                  />
                </Col>
                <Col md={7} sm={7}>
                  <h5>
                    <a
                      href='#'
                      className='profile-link text-white text-decoration-none'
                    >
                      Hamza Farooq
                    </a>
                  </h5>
                </Col>
                <Col md={3} sm={3}>
                  <Button className='btn btn-primary pull-right'>
                    Add Friend
                  </Button>
                </Col>
              </Row>
            </div>
            <div className='nearby-user bg-dark px-5 rounded-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2} sm={2}>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='user'
                    className='profile-photo-lg'
                  />
                </Col>
                <Col md={7} sm={7}>
                  <h5>
                    <a
                      href='#'
                      className='profile-link text-white text-decoration-none'
                    >
                      Hamza Farooq
                    </a>
                  </h5>
                </Col>
                <Col md={3} sm={3}>
                  <Button className='btn btn-primary pull-right'>
                    Add Friend
                  </Button>
                </Col>
              </Row>
            </div>
            <div className='nearby-user bg-dark px-5 rounded-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2} sm={2}>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='user'
                    className='profile-photo-lg'
                  />
                </Col>
                <Col md={7} sm={7}>
                  <h5>
                    <a
                      href='#'
                      className='profile-link text-white text-decoration-none'
                    >
                      Hamza Farooq
                    </a>
                  </h5>
                </Col>
                <Col md={3} sm={3}>
                  <Button className='btn btn-primary pull-right'>
                    Add Friend
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FriendsPage
