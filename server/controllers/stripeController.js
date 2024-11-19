const dotenv = require("dotenv");
dotenv.config({});
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.checkout = async (req, res) => {
  const { plan } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Premium Plan",
            description: "Unlock 25 Daily Searches & Exclusive Features",
          },
          unit_amount: 200000, // Amount in paise
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: "https://face-search-ai.vercel.app/",
    cancel_url: "https://face-search-ai.vercel.app/",
  });

  res.json({ id: session.id });
};
