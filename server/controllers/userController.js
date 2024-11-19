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
