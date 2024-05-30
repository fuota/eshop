import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <div>
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>ProShop</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <LinkContainer to="/cart">
                    <Nav.Link><i className='fa fa-shopping-cart'></i>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link><i className='fa fa-user'></i>Login</Nav.Link>
                  </LinkContainer>
                </Nav>
         
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </header>
    </div>
  )
}

export default Header;
