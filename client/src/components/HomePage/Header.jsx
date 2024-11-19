import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="sticky top-0 bg-black text-white shadow-lg z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        {/* Logo */}
        {/* <div className="text-xl font-bold">FaceSearch AI</div> */}
        <Link to="/">
          <img
            src="https://facesearchai.com/images/WhatsApp_Image_2024-01-01_at_10.jpg"
            className="w-[60px]"
          />
        </Link>
        {/* Navigation Links */}
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
          <Link to="/pricing" className="hover:text-blue-400">
            Pricing
          </Link>
          {localStorage.getItem("token") ? (
            <button
              className="hover:text-blue-400 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>
          )}
        </nav>
        {/* CTA Button */}
        {localStorage.getItem("token") ? (
          <div>hello world!</div>
        ) : (
          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-white">
            Try Now
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
