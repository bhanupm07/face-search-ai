import React from "react";
import illustration from "../../assets/illustration.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-28">
        {/* Partnerships Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              In Partnership with
            </h3>
            <div className="flex items-center gap-4">
              <img
                src="https://facesearchai.com/images/pv-logo-min.png"
                alt="Partner 1"
                className="h-12"
              />
              <img
                src="https://facesearchai.com/images/DiaWikiLogo-1.png"
                alt="Partner 2"
                className="h-12"
              />
            </div>
          </div>
          {/* Optional illustration */}
          <img
            src={illustration}
            alt="Illustration"
            className="h-64 hidden md:block"
          />
        </div>

        {/* Contact Information */}
        <div className="text-center mb-3">
          <p className="text-white text-lg">facesearchai@gmail.com</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
