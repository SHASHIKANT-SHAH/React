import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export const SearchForm = ({ theme, searchQuery, setSearchQuery, handleSearch }) => (
  <Form className="d-flex" role="search" onSubmit={handleSearch}>
    <FormControl
      type="search"
      placeholder="Search..."
      className="me-2"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <Button variant={theme === "light" ? "outline-primary" : "primary"} type="submit">
      Go
    </Button>
  </Form>
);
