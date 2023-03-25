// Importing necessary dependencies from react-bootstrap and react-router-dom
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

// Importing the logo and CSS styles
import logo from '../assets/logo.png'
import '../styles/style.css'

function NavbarPage() {
  // Defining states and state update functions using the useState hook
  const [show, setShow] = useState(false)

  // Defining functions to handle offcanvas menu visibility
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Getting the current location using the useLocation hook from react-router-dom
  const location = useLocation()

  // Checking the current location to determine which page is being displayed
  const isLoginPage = location.pathname === '/login'
  const isHomePage = location.pathname === '/'
  const isSignupPage = location.pathname === '/signup'

  // Defining a function to handle user logout
  const handleLogout = () => {
    window.location.href = '/' // Redirecting to the home page on logout
  }

  // This is a functional component that returns a navigation bar with an offcanvas
  return (
    <>
      {/* Navbar with a dark background and a logo */}
      <Navbar bg='dark' variant='dark' className=''>
        <Container className='justify-content-space-between'>
          {/* The logo and the name of the app */}
          {/* This will navigate to home if the current page is not the login or signup page, otherwise it will navigate to "#" */}
          <Navbar.Brand
            as={NavLink}
            to={!isLoginPage && !isSignupPage && !isHomePage ? 'home' : '#'}
          >
            <img
              alt=''
              src={logo}
              height='50'
              className=' d-inline-block align-top'
            />
            BlueSpace
          </Navbar.Brand>

          {/* If not on the login, signup or home page, display the Options and Logout buttons */}
          {!isLoginPage && !isSignupPage && !isHomePage && (
            <Nav>
              <Button variant='primary' onClick={handleShow}>
                Options
              </Button>
              <Button
                variant='outline-success'
                className='mx-3 text-white'
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>

      {/* Offcanvas menu that appears when the Options button is clicked */}
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
          {/* Vertical navigation bar in the offcanvas */}
          <Nav className='flex-column'>
            {/* Links to the different pages, which navigate to the page and close the offcanvas */}
            <Nav.Item>
              <NavLink
                to='/home'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/friends'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
              >
                Discover
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/profile'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
              >
                Profile
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/discover'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
              >
                Friend
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/messanger'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
              >
                Messanger
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to='/upload'
                className='nav-link'
                onClick={() => setShow(false)} // to disappear offcanvas
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

export default NavbarPage
