import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavLinks = () => (
  <Nav className="align-items-start gap-2 nav-links-modern">
    <Nav.Link as={NavLink} to="/" end>
      Home
    </Nav.Link>
    <Nav.Link as={NavLink} to="/services">
      Services
    </Nav.Link>
    <NavDropdown title="Products" id="nav-dropdown">
      <NavDropdown.Item as={NavLink} to="/products/ethnic">
        Ethnic Wear
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/products/western">
        Western Wear
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={NavLink} to="/products/bulk">
        Bulk Orders
      </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link as={NavLink} to="/portfolio">
      Portfolio
    </Nav.Link>
    <Nav.Link as={NavLink} to="/pricing">
      Pricing
    </Nav.Link>
    <Nav.Link as={NavLink} to="/contact">
      Contact
    </Nav.Link>
  </Nav>
);
