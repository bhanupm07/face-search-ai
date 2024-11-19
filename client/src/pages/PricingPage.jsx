import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { publishable_key, serverUrl } from "../utils/constants";
import Header from "../components/HomePage/Header";
import { Spinner, useToast } from "@chakra-ui/react";

const PricingPage = () => {
  const stripePromise = loadStripe(publishable_key);
  const [isProcessing, setIsProcessing] = useState(false);
  const toast = useToast();

  const handleBuyNow = async () => {
    setIsProcessing(true);
    const stripe = await stripePromise;

    // Call your backend to create a Stripe checkout session
    const response = await fetch(`${serverUrl}/api/v1/stripe/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: "premium" }), // Pass the plan name
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      toast({
        title: result.error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsProcessing(false);
  };

  return (
    <>
      <Header />
      <div className="pricing-page min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="animated-gradient"></div>
        </div>

        {/* Pricing Card */}
        <div className="z-10 max-w-lg bg-gray-800 rounded-lg shadow-lg p-7 my-12">
          <h2 className="text-3xl font-bold text-center mb-4">Premium Plan</h2>
          <p className="text-center text-lg text-gray-400 mb-6">
            Unlock 25 Daily Searches & Exclusive Features with Premium
          </p>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-4xl font-extrabold text-center text-white">
              ₹2,000.00 /mo
            </p>
            <p className="text-sm text-center text-gray-400 mt-2">
              Monthly Subscription - Auto-renews every month
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <span className="text-green-400">✔</span>
                <span className="ml-3 text-gray-300">
                  Unlock 25 Daily Searches
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400">✔</span>
                <span className="ml-3 text-gray-300">
                  Increased Results Quantity and Quality
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400">✔</span>
                <span className="ml-3 text-gray-300">Access to Links</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400">✔</span>
                <span className="ml-3 text-gray-300">
                  Advanced GPT Research Capabilities
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400">✔</span>
                <span className="ml-3 text-gray-300">
                  Access to More Details of Images
                </span>
              </li>
            </ul>
            <div className="bg-gray-600 p-4 rounded-lg mt-6 text-sm text-gray-300">
              <p className="font-bold">Introductory Offer for New Users</p>
              <ul className="list-disc ml-4 mt-2">
                <li>50% off for the first month</li>
                <li>5 searches with links in the first month</li>
                <li>10 extra free searches in the first month</li>
              </ul>
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="w-full bg-purple-600 text-white py-3 mt-6 rounded-lg hover:bg-purple-500"
          >
            {isProcessing ? <Spinner /> : "Buy Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
