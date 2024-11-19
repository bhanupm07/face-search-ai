import React from "react";
import Header from "../components/HomePage/Header";
import HeroSection from "../components/HomePage/HeroSection";
import Features from "../components/HomePage/Features";
import Footer from "../components/HomePage/Footer";
import HowItWorks from "../components/HomePage/HowItWorks";
import Testimonials from "../components/HomePage/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
