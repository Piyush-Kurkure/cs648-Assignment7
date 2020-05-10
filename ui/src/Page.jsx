import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductAddNavItem from './ProductAddNavItem.jsx';
// import { NavLink } from 'react-router-dom';
import Contents from './Contents.jsx';


// import Contents from './Contents.jsx';

function NavBar() {
  return (
  // <nav>
  //   <NavLink exact to="/">Home</NavLink>
  //   {' | '}
  //   <NavLink to="/products">Product List</NavLink>
  // </nav>

    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Product Inventory</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/products">
          <NavItem>Product List</NavItem>
        </LinkContainer>
      </Nav>

      <Nav pullRight>
        <ProductAddNavItem />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        My Product Inventory
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
      <Footer />
    </div>
  );
}
