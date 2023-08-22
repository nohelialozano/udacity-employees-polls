import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SetAuthedUser } from "../actions/authedUser";

const Nav = () => {

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    const authedUser = useSelector((state) => state.authedUser);

    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(SetAuthedUser(null));
    }

    return (
        <nav className="nav topnav">
            <div className={splitLocation[1] === "" ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className={splitLocation[1] === "leaderboard" ? "active" : ""}>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                </div>
                <div className={splitLocation[1] === "add" ? "active" : ""}>
                    <NavLink to="/add">New</NavLink>
                </div>
            <div className="topnav-right">
                <a>{authedUser}</a>
                <a href="#" onClick={(e) => logout(e)}>Logout</a>
            </div>
        </nav>
    )
}

export default Nav;