import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#9538E2]  relative">
      <div className="navbar   items-start container mx-auto">
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
              <NavLink className="text-[#FFFFFF]" to="/statistic">
                Statatistic
              </NavLink>
              <NavLink className="text-[#FFFFFF]" to="/home">
                Home
              </NavLink>
              <NavLink className="text-[#FFFFFF]" to="/dashboard">
                Dashboard
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-[#FFFFFF] text-xl">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink className="text-[#FFFFFF]" to="/">
              Home
            </NavLink>
            <NavLink className="text-[#FFFFFF]" to="/statistic">
              Statistic
            </NavLink>
            <NavLink className="text-[#FFFFFF]" to="/dashboard">
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4 ">
          <NavLink
            className="w-8 h-8 bg-white rounded-3xl flex justify-center items-center"
            to="/home"
          >
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </NavLink>
          <NavLink
            className="w-8 h-8 bg-white rounded-3xl flex justify-center items-center"
            to="/home"
          >
            <i className="fa-regular fa-heart"></i>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
