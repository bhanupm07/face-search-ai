const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const stripeRouter = require("./routes/stripeRoutes");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authMiddleware, userRouter);
app.use("/api/v1/stripe", stripeRouter);

app.all("*", (req, res) => {
  res.status(404).json("Hi your api is working.");
});

module.exports = app;
