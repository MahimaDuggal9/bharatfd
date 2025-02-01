const validateFaq = (req, res, next) => {
    const { question, answer, language } = req.body;
    if (!question || !answer || !language) {
      return res.status(400).json({ error: "All fields are required" });
    }
    next();
  };
  
  module.exports = validateFaq;
  