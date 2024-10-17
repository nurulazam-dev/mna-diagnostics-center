import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/brand-logo/mna-diagnostics-center.png";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/doctors",
    display: "DOCTORS",
  },
  {
    path: "/services",
    display: "SERVICES",
  },
  {
    path: "/about",
    display: "ABOUT US",
  },
  {
    path: "/contact",
    display: "CONTACT",
  },
];

const HeaderCopy = () => {
  const activeClass = "text-green-700 text-[16px] leader-7 font-bold";
  const inactiveClass = "text-black text-[16px] leader-7 font-bold";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, role, token, dispatch } = useContext(authContext);

  const navigate = useNavigate();

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* ========Logo========= */}
        <div className="">
          <NavLink to="/">
            <img src={logo} alt="" className="w-[65px]" />
          </NavLink>
        </div>

        {/* Middle: Nav Links */}
        <nav className="hidden md:flex space-x-6 list-none">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={(navClass) =>
                  navClass.isActive ? activeClass : inactiveClass
                }
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </nav>

        {/* Right: User Info or Login/Logout */}
        <div className="flex items-center space-x-4">
          {token && user ? (
            <div className="flex items-center space-x-2">
              <Link
                to={`${
                  role == "doctor" ? "/doctors/profile/me" : "/users/profile/me"
                }`}
              >
                <span className="text-gray-700">{user.name}</span>
                <figure className="w-[45px] h-[45px] rounded-full cursor-pointer lg:block md:block hidden">
                  <img
                    src={user?.photo}
                    alt="user"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>

              <img
                src={user.photo}
                alt="User"
                className="w-8 h-8 rounded-full"
              />

              <button
                onClick={handleLogout}
                className="bg-red-600 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-slate-700 hover:border-none ml-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-violet-700 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-slate-700 hover:border-none">
                Login
              </button>
            </Link>
          )}

          {/* Toggle Menu Button for Mobile */}
          <button
            className="md:hidden block text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <BiMenu className="w-8 h-8 cursor-pointer" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md fixed inset-y-0 right-0 w-64 p-6 z-50">
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 list-none">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive ? activeClass : inactiveClass
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderCopy;
