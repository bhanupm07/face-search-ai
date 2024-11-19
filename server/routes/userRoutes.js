const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.route("/details").get(userControllers.getUserDetails);
router.route("/upload-image").post(userControllers.saveUploadedImage);

module.exports = router;
