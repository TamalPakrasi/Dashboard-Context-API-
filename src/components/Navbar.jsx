import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../contexts/Auth.context.js";

function Navbar() {
  const { isAuthenticate, setIsAuthenticate } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 sticky top-0 left-0 z-100">
      <div className="navbar-start">
        <span className="text-xl font-bold text-violet-500">Auth Project</span>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-violet-500" : "text-gray-700"
                } font-semibold`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  isActive ? "text-violet-500" : "text-gray-700"
                } font-semibold`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticate ? (
          <button
            className="btn text-violet-500"
            onClick={() => setIsAuthenticate(false)}
          >
            Log out
          </button>
        ) : (
          <Link className="btn text-violet-500" to="/login">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
