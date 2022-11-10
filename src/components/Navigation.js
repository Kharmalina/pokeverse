import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import squirtle from '../../public/squirtle.png';

import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar sticky='top' bg='secondary' variant='dark' className="mb-4">
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width="30" className="me-2" />
          Pokeverse
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>All Pokemon</Nav.Link>
          <Nav.Link  as={Link} to='/favorites'>My Deck</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// <Nav.Link href='/'>All Pokemon</Nav.Link> this will refresh the page

 
export { Navigation };

// Nav.Link will refresh the page to head back to Home.js ("/")
// Right now the All Pokemon link works like a normal anchor tag (when clicked the page loads/refreshes), but we want to use React Router, with no page refresh! Convert the Nav.Link to use the properties of the Link component by passing it the as={Link} prop, and switch out the href for a to prop. The react-bootstrap docs have examples of other components like Nav.Item using the asprop.