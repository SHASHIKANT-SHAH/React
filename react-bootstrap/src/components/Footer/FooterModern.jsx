import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterModern({ theme = "light", styleMode = "glass" }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`footer-modern mt-auto py-4 ${
        styleMode === "glass" ? "footer-glass" : "footer-gradient"
      } ${theme === "dark" ? "text-light" : "text-dark"}`}
    >
      <Container>
        <Row className="align-items-center gy-2 text-center text-md-start">
          <Col md={6}>
            <h6 className="mb-1 fw-semibold">Stitch Studio</h6>
            <small className="opacity-75">
              © {year} | Tailoring & Boutique | Crafted with ❤️ in React
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="/privacy" className="footer-link me-3">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link me-3">
              Terms of Service
            </a>
            <a
              href="https://getbootstrap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Built with Bootstrap
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
