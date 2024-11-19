const express = require("express");
const stripeControllers = require("../controllers/stripeController");
const router = express.Router();

router.route("/checkout").post(stripeControllers.checkout);

module.exports = router;
