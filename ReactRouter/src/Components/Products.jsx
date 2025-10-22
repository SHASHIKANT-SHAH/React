import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>Welcome to the Products page. Here you can find our product listings.</p>
      <nav>
        <Link to="/products/shirt">Shirt</Link> |
        <Link to="/products/jeans">Jeans</Link>
      </nav>
      <Outlet />
    </div>
  );

}

export default Products;