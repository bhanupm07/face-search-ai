import React from "react";
import upload from "../../assets/upload.png";
import ai from "../../assets/ai.png";
import results from "../../assets/results.png";

const steps = [
  {
    title: "Upload Your Photo",
    description: "Simply upload a photo to start searching across the web.",
    // imgUrl: "https://cdn-icons-png.flaticon.com/512/3179/3179068.png",
    imgUrl: upload,
  },
  {
    title: "AI Processes the Data",
    description: "Our AI scans the internet for your matches in seconds.",
    // imgUrl: "https://cdn-icons-png.flaticon.com/512/1161/1161381.png",
    imgUrl: ai,
  },
  {
    title: "View Your Results",
    description: "Get a detailed list of where your image appears online.",
    // imgUrl: "https://cdn-icons-png.flaticon.com/512/4305/4305301.png",
    imgUrl: results,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <img
                src={step.imgUrl}
                alt={step.title}
                className="w-40 h-40 mb-6 md:mb-0 md:mr-8 md:ml-8"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
