import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/user'>User</NavLink>
        <NavLink to='/LazyLoading'>Lazy Loading</NavLink>
    </nav>
  );
}

export default Navbar;