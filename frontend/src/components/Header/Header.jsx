import { useContext, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/brand-logo/mna-diagnostics-center.png";
import { authContext } from "../../context/AuthContext.jsx";

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

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="flex bg-green-600 h-[60px] items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========Logo========= */}
          <div className="">
            <NavLink to="/">
              <img src={logo} alt="" className="w-[65px]" />
            </NavLink>
          </div>

          {/* ========menu========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-black text-[16px] leader-7 font-bold"
                        : "text-white text-[16px] leader-7 font-bold hover:text-black"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========nav right========= */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="">
                <Link
                  to={`${
                    role == "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="mr-2 text-black text-[16px] font-bold">
                      {user?.name}{" "}
                    </h2>
                    <figure className="w-[45px] h-[45px] rounded-full cursor-pointer">
                      <img
                        src={user?.photo}
                        alt=""
                        className="w-full rounded-full"
                      />
                    </figure>
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-slate-700 hover:border-none">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
