// FeatureSection.jsx
import React from "react";

const features = [
  {
    title: "AI-Powered Search",
    description:
      "Find your photos online using state-of-the-art AI algorithms.",
    imgUrl:
      "https://www.npws.net/hubfs/the%20future%20of%20ai%20powered%20search%20engines.jpg",
  },
  {
    title: "Privacy Protection",
    description: "We ensure your uploaded images are secure and never misused.",
    imgUrl:
      "https://www.cookieyes.com/wp-content/uploads/2023/03/privacy-by-design.png",
  },
  {
    title: "Lightning Fast",
    description: "Experience quick results with our optimized systems.",
    imgUrl:
      "https://media.istockphoto.com/id/884384536/photo/abstract-background-with-lighting-bolt-sign-icon-on-black-background.jpg?s=612x612&w=0&k=20&c=vyrA3clM8zPW08brcKvLl4vpDZZIVC4A7Rt3ol2Up8g=",
  },
  {
    title: "User-Friendly Design",
    description: "An intuitive and accessible interface for all users.",
    imgUrl: "https://via.placeholder.com/150?text=UI+UX",
  },
];

const Features = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 py-10 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={feature.imgUrl}
                alt={feature.title}
                className="h-32 w-32 rounded-lg object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
