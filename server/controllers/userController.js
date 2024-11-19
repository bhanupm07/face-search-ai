const User = require("../models/userModel");

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.userId;

    // Fetch user details from the database
    const user = await User.findById(userId).select("-password"); // Exclude the password from the result

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.saveUploadedImage = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId is extracted from middleware (e.g., JWT auth)
    const { imageUrl } = req.body; // Get the URL from the request body

    if (!imageUrl) {
      return res.status(400).json({ error: "Image URL is required" });
    }

    // Update the user's uploadedImage property
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.uploadedImage.push(imageUrl); // Add the new image URL to the array
    await user.save();

    return res
      .status(200)
      .json({
        message: "Image uploaded successfully",
        uploadedImage: user.uploadedImage,
      });
  } catch (error) {
    console.error("Error saving uploaded image:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
