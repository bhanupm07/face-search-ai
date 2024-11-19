import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../context/userInfoContext";
import { useToast } from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserInfoContext);
  const toast = useToast();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
          <div className="flex items-center gap-2">
            {userInfo?.uploadedImage?.length ? (
              <img
                src={userInfo?.uploadedImage[0]}
                alt="pfp"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="text-black bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center">
                {userInfo?.name ? userInfo?.name?.split("")?.[0] : "U"}
              </div>
            )}
            <p>{userInfo?.name ? userInfo.name : "User"}</p>
          </div>
        ) : (
          // <div>User</div>
          <Link
            to="/search"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-white"
          >
            Try Now
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
