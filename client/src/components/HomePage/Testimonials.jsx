import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Photographer",
    feedback:
      "FaceSearch AI helped me find unauthorized usage of my photos. It's amazing!",
    imgUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Digital Marketer",
    feedback: "The AI is lightning-fast and accurate. Highly recommend it!",
    imgUrl: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Emily Wilson",
    role: "Freelancer",
    feedback: "I love the privacy-first approach of this platform!",
    imgUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-12 md:px-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-12">What People Say</h2>
        <div className="relative">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <img
              src={currentTestimonial.imgUrl}
              alt={currentTestimonial.name}
              className="h-20 w-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm text-gray-400 italic mb-4">
              {currentTestimonial.role}
            </p>
            <p className="text-gray-400">{`"${currentTestimonial.feedback}"`}</p>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8249;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
