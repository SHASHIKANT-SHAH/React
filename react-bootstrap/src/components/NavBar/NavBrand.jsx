import React from "react";
import { Navbar } from "react-bootstrap";

export const NavBrand = ({ theme }) => {
  const textClass = theme === "light" ? "text-dark" : "text-light";
  return (
    <Navbar.Brand className="d-flex align-items-center gap-2">
      <img
        src="https://placehold.co/40x40?text=SS"
        alt="logo"
        width={38}
        height={38}
        style={{ borderRadius: 10 }}
      />
      <div className={`fw-bold ${textClass} fs-5`}>Stitch Studio</div>
    </Navbar.Brand>
  );
};
