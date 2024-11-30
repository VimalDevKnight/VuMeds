import React from "react";
import { Navbar, Nav, Container, Offcanvas, Button, Form, FormControl } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation(); // To track the active route

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" fixed="top" className="mb-3">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>
            VuMeds
          </Navbar.Brand>

          {/* Hamburger Toggle Button */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Offcanvas for smaller screens */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">VuMeds Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Nav Links for Mobile Only */}
              <Nav className="justify-content-end flex-grow-1 pe-3 d-lg-none">
                <Nav.Link as={Link} to="/" style={{ color: 'white' }} active={location.pathname === '/'}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/shop" style={{ color: 'white' }} active={location.pathname === '/shop'}>
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to="/products" style={{ color: 'white' }} active={location.pathname === '/products'}>
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/upload-prescription" style={{ color: 'white' }} active={location.pathname === '/upload-prescription'}>
                  Upload Prescription
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us" style={{ color: 'white' }} active={location.pathname === '/contact-us'}>
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us" style={{ color: 'white' }} active={location.pathname === '/about-us'}>
                  About Us
                </Nav.Link>
              </Nav>

              {/* Search Form ONLY in Offcanvas (Mobile view) */}
              <div className="d-lg-none">
                <Form className="d-flex mt-3" role="search">
                  <FormControl
                    type="search"
                    placeholder="Search medicines..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Nav Links for Large Screens */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: 'white' }} active={location.pathname === '/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" style={{ color: 'white' }} active={location.pathname === '/shop'}>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/products" style={{ color: 'white' }} active={location.pathname === '/products'}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/upload-prescription" style={{ color: 'white' }} active={location.pathname === '/upload-prescription'}>
                Upload Prescription
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-us" style={{ color: 'white' }} active={location.pathname === '/contact-us'}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us" style={{ color: 'white' }} active={location.pathname === '/about-us'}>
                About Us
              </Nav.Link>
            </Nav>

            {/* Search Form ONLY for larger screens (visible in Navbar) */}
            <div className="d-none d-lg-flex">
              <Form className="d-flex" role="search">
                <FormControl
                  type="search"
                  placeholder="Search medicines..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
