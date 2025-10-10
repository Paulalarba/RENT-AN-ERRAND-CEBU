import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/"
                    className={({ isActive }) =>{
                        return isActive ? "active-link" : "";
                    }}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/AboutUs">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="HowItWorks"> How It Works</NavLink>
                </li>
                <li>
                    <NavLink to="Contacts">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;