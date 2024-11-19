const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.route("/details").get(userControllers.getUserDetails);

module.exports = router;
