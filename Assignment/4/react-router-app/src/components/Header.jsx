import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div> {'\u{1F45F}'} ShoeZone</div>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/userinfo">User Info</NavLink>
            </nav>
        </header>
    );
};

export default Header