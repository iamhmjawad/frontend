import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../assets/logo.png'
import '../styles/style.css'
// import '../styles/style.css'

function ColorSchemesExample() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Navbar bg='dark' variant='dark' className=''>
        <Container className='justify-content-space-between'>
          {/* <Navbar.Brand href='/'> */}
          <Navbar.Brand as={NavLink} to='/'>
            <img
              alt=''
              src={logo}
              // width='30'
              height='50'
              className=' d-inline-block align-top'
            />{' '}
            BlueSpace
          </Navbar.Brand>{' '}
          <Nav>
            <Button variant='outline-success' onClick={handleShow}>
              SideBar
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas
        placement='end'
        show={show}
        onHide={handleClose}
        className='w-25'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            <Nav.Item>
              <NavLink
                to='/'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/friends'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Friends
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/profile'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Profile
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/discover'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Discover
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/messanger'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Messanger
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/upload'
                className='nav-link'
                onClick={() => setShow(false)} // to dissapear offcanvas
              >
                Add
              </NavLink>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ColorSchemesExample
