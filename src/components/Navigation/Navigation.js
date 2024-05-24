import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.png';
import cartIcon from '../../assets/images/icon-cart.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import { Container, Nav, Navbar, Offcanvas, Badge } from 'react-bootstrap';
import './Navigation.css';

function Navigation({ handleShow, totalCartQuantity }) {
  const [activeLink, setActiveLink] = useState('Collections');

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <Navbar
      expand="md"
      className="mb-3"
      data-bs-theme="light">
      <Container
        fluid
        className="ps-0">
        <Navbar.Toggle
          aria-controls={`OffcanvasNavbar`}
          className="border-0">
          <img
            src={menuIcon}
            alt="menu toggle Icon"
            className="d-inline-block align-center"
            height="15"
            width="16"
          />
        </Navbar.Toggle>
        <Navbar.Brand
          href="#"
          id="Navbar-Brand"
          className="pt-0 me-lg-5">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block pt-0 ps-1"
            height="20"
            width="138"
          />
        </Navbar.Brand>

        <Nav
          id="DesktopNavbar"
          className="d-none d-md-flex align-bottom fw-bold">
          {navLinks.map(link => (
            <Nav.Link
              key={link.name}
              href={link.href}
              className={activeLink === link.name ? 'active-link' : ''}
              onClick={() => setActiveLink(link.name)}
              active={false}>
              {link.name}
            </Nav.Link>
          ))}
        </Nav>

        <Navbar.Offcanvas
          id="Offcanvas"
          aria-labelledby={`offcanvasNavbarLabel`}
          placement="start"
          className="d-md-none">
          <Offcanvas.Header
            closeButton
            className="d-block d-md-none">
            <h5
              id="offcanvasNavbarLabel"
              className="visually-hidden">
              Offcanvas
            </h5>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              id="OffcanvasNavbar"
              className="flex-column align-bottom fw-bold">
              {navLinks.map(link => (
                <Nav.Link
                  key={link.name}
                  href={link.href}
                  className={activeLink === link.name ? 'active-link' : ''}
                  onClick={() => setActiveLink(link.name)}
                  active={false}>
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="ms-auto flex-row align-items-center ">
          <button
            className="cart-icon position-relative pe-3 pe-lg-4"
            onClick={handleShow}>
            <img
              src={cartIcon}
              alt="cart icon"
              className="d-inline-block align-center"
              width="22"
              height="20"
            />
            {totalCartQuantity > 0 && (
              <Badge
                pill
                id="Cart-Quantity"
                className="position-absolute top-0 translate-middle">
                {totalCartQuantity}
              </Badge>
            )}
          </button>
          <Nav.Link
            eventKey={2}
            className="pe-0"
            href="">
            <img
              src={avatar}
              alt="avatar"
              className="avatar-image d-inline-block align-center"
              height="24"
              width="24"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
