import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <ul>
            <li><NavLink className="active" to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/bookPage">bookPage</NavLink></li>
        </ul>
    );
}