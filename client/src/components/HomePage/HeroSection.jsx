import React from "react";
import { Link } from "react-router-dom";
import face from "../../assets/illustration2.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* <!-- Animated Background --> */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full overflow-hidden">
          <div className="moving-dots"></div>
        </div>
      </div>

      <section
        className="text-white h-full flex flex-col items-center justify-center text-center relative"
        // style={{
        //   backgroundImage: "url('/path-to-your-background-image.jpg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundBlendMode: "overlay",
        //   backgroundColor: "rgba(0, 0, 0, 0.7)",
        // }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Find Yourself Online Instantly
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Upload a photo and discover where it appears online.
        </p>
        <img src={face} alt="illustration" className="w-80" />
        <Link
          to="/search"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-xl"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HeroSection;
