import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <nav className="nav">
            <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={splitLocation[1] === "leaderboard" ? "active" : ""}>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className={splitLocation[1] === "add" ? "active" : ""}>
                    <NavLink to="/add">New</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;