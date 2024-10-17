import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";

const HeaderCopy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useContext(authContext);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Brand Logo" className="w-12 h-12" />
          <span className="text-xl font-bold ml-2">MNA DC</span>
        </div>

        {/* Middle: Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/doctors" className="text-gray-700 hover:text-blue-500">
            Doctors
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="/about-us" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Right: User Info or Login/Logout */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <img
                src={user.photo}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">{user.name}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </a>
          )}

          {/* Toggle Menu Button for Mobile */}
          <button
            className="md:hidden block text-gray-700 focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
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
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/doctors" className="text-gray-700 hover:text-blue-500">
              Doctors
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-500">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderCopy;
