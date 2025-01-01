import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ setDashboardTab }) => {
  const location = useLocation();
  const [navbarBg, setNavbarBg] = useState("#9538E2");

  // Update navbar background based on the current route
  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/statistic" ||
    location.pathname === "/home"
  ) {
    if (navbarBg !== "#FFFFFF") setNavbarBg("#FFFFFF");
  } else {
    if (navbarBg !== "#9538E2") setNavbarBg("#9538E2");
  }

  return (
    <div style={{ backgroundColor: navbarBg }} className="relative">
      <div className="navbar items-start container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 ${
                    isActive ? "bg-blue-500 text-white" : "text-black"
                  }`
                }
                to="/statistic"
              >
                Statistic
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 ${
                    isActive ? "bg-blue-500 text-white" : "text-black"
                  }`
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 ${
                    isActive ? "bg-blue-500 text-white" : "text-black"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-black text-xl">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-4 py-2 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-4 py-2 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              to="/statistic"
            >
              Statistic
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-4 py-2 ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <NavLink
            className="w-8 h-8 bg-white rounded-full flex justify-center items-center"
            to="/dashboard"
            onClick={() => setDashboardTab("cart")}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink
            className="w-8 h-8 bg-white rounded-full flex justify-center items-center"
            to="/dashboard"
            onClick={() => setDashboardTab("wishlist")}
          >
            <i className="fa-regular fa-heart"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
