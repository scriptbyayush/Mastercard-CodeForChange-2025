const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Code is required in the request body" });
    }

    const response = await aiService(code);

    return res.status(200).json({ review: response });
  } catch (error) {
    console.error("Error in getReview controller:", error);
    return res.status(500).json({
      error: "Failed to process code review request",
      message: error.message,
    });
  }
};
