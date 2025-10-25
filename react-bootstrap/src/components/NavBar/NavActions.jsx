import React from "react";
import { Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Bell, PersonCircle } from "react-bootstrap-icons";

export const NavActions = ({
  theme,
  unreadCount,
  toggleTheme,
  toggleStyleMode,
  styleMode,
}) => (
  <div className="d-flex align-items-center gap-2">
    <button
      className={`btn btn-${theme === "light" ? "outline" : ""}-secondary position-relative rounded-circle p-2`}
      aria-label="Notifications"
    >
      <Bell size={18} className={theme === "dark" ? "text-light" : ""} />
      {unreadCount > 0 && (
        <Badge
          bg="danger"
          pill
          className="position-absolute"
          style={{ top: 2, right: 2 }}
        >
          {unreadCount}
        </Badge>
      )}
    </button>

    <Button
      variant={theme === "light" ? "outline-secondary" : "secondary"}
      as={NavLink}
      to="/profile"
      className="d-flex align-items-center gap-1"
    >
      <PersonCircle />
      <span className="d-none d-md-inline">Profile</span>
    </Button>

    <Button
      variant={theme === "light" ? "outline-dark" : "light"}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark" : "Light"}
    </Button>

    <Button
      variant={theme === "light" ? "outline-primary" : "primary"}
      onClick={toggleStyleMode}
    >
      {styleMode === "glass" ? "Gradient" : "Glass"}
    </Button>
  </div>
);
