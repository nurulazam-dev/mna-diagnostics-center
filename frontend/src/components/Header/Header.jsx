import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/brand-logo/mna-diagnostics-center.png";
import userAvatar from "../../assets/images/icons/patient-avatar.png";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/",
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
const Header = () => {
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
        <div className="flex items-center lg:space-x-4 space-x-2">
          {token && user ? (
            <div className="flex items-center space-x-2">
              <Link
                to={`${
                  role == "doctor" ? "/doctors/profile/me" : "/users/profile/me"
                }`}
                className="flex justify-center items-center"
              >
                <span className="text-gray-700 mr-1">{user.name}</span>
                <figure className="lg:w-[45px] lg:h-[45px] w-[30px] h-[40px] rounded-full cursor-pointer flex items-center">
                  <img
                    src={user?.photo ? user.photo : userAvatar}
                    alt="user"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 py-[6px] px-4 text-white font-[700] h-[40px] rounded-[3px] hover:bg-green-700 hover:border-none ml-2 hidden lg:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-violet-700 py-[6PX] px-4 text-white font-[700] h-[40px] rounded-[3px] hover:bg-green-700 hover:border-none hidden lg:block"
            >
              <button>Login</button>
            </Link>
          )}

          {/* Toggle Menu Button for Mobile */}
          <button
            className="md:hidden block text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <BiMenu className="w-8 h-8 cursor-pointer" />
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

            {token && user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 py-[6px] px-4 text-white font-[700] h-[40px] flex items-center justify-center rounded-[3px] hover:bg-green-700 hover:border-none"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-violet-700 py-[6PX] px-4 text-white font-[700] h-[40px] flex items-center justify-center rounded-[3px] hover:bg-green-700 hover:border-none"
              >
                <button>Login</button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
