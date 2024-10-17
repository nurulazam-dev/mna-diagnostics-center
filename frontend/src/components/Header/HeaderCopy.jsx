import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";

const HeaderCopy = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(authContext);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Left side - Brand Logo */}
        <div className="flex items-center">
          <img
            src="/path-to-logo.png"
            alt="MNA Diagnostics Center"
            className="h-10 w-10"
          />
          <span className="ml-2 text-xl font-semibold text-gray-800">
            MNA Diagnostics Center
          </span>
        </div>

        {/* Middle - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#doctors" className="text-gray-600 hover:text-gray-900">
            Doctors
          </a>
          <a href="#services" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>

        {/* Right side - Login/Logout and User Info */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-600">{user?.name}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#doctors"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Doctors
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderCopy;
