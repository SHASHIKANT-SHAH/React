import React, { useState } from "react";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBrand } from "./NavBrand";
import { NavLinks } from "./NavLinks";
import { SearchForm } from "./SearchForm";
import { NavActions } from "./NavActions";
import "../../styles/navbar-modern.css";

export default function AppNavbar({
  defaultTheme = "light",
  expand = "lg",
  sticky = true,
}) {
  const [theme, setTheme] = useState(defaultTheme);
  const [styleMode, setStyleMode] = useState("glass"); // "glass" | "gradient"
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadCount] = useState(3);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const toggleStyleMode = () =>
    setStyleMode((prev) => (prev === "glass" ? "gradient" : "glass"));

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  const variant = theme === "light" ? "light" : "dark";
  const bg = theme === "light" ? "white" : "dark";

  return (
    <Router>
      <Navbar
        bg={bg}
        variant={variant}
        expand={expand}
        className={`${styleMode === "glass" ? "navbar-glass" : "navbar-gradient"} ${
          sticky ? "sticky-top" : ""
        } py-3 shadow-soft`}
      >
        <Container fluid className="px-4">
          <NavBrand theme={theme} />
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="d-lg-none"
          />
          {/* Offcanvas for Mobile */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            placement="end"
            className={`d-lg-none ${
              theme === "dark" ? "bg-dark text-light" : ""
            }`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            {/* <Offcanvas.Body className="d-flex flex-column justify-content-between h-100 p-3">
              <div className="flex-grow-1 d-flex flex-column gap-3"> */}
            <Offcanvas.Body className="d-flex flex-column h-100 p-3">
                <div className="flex-grow-1 d-flex flex-column align-items-start gap-3">
                <NavLinks />
                <div className="mt-2">
              <SearchForm
                theme={theme}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              </div>
              </div>
              <div className="pt-3 mt-3 border-top">
              <NavActions
                theme={theme}
                unreadCount={unreadCount}
                toggleTheme={toggleTheme}
                toggleStyleMode={toggleStyleMode}
                styleMode={styleMode}
              />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* Desktop */}
          <Navbar.Collapse
            id={`offcanvasNavbar-expand-${expand}`}
            className="justify-content-between align-items-center d-none d-lg-flex"
          >
            <div className="d-flex align-items-center gap-4">
              <NavLinks />
            </div>
            <div className="d-flex align-items-center gap-3 ms-auto">
              <SearchForm
                theme={theme}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <NavActions
                theme={theme}
                unreadCount={unreadCount}
                toggleTheme={toggleTheme}
                toggleStyleMode={toggleStyleMode}
                styleMode={styleMode}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
