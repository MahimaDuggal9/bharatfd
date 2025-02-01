const FAQ = require("../models/FAQ");
const redisClient = require("../config/redisConfig");
const translate = require("@vitalets/google-translate-api");

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";

    const cachedFAQs = await redisClient.get(`faqs_${lang}`);
    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    const faqs = await FAQ.find();
    
    const translatedFAQs = await Promise.all(
      faqs.map(async (faq) => {
        const translatedQuestion = await translate(faq.question, { to: lang });
        const translatedAnswer = await translate(faq.answer, { to: lang });

        return {
          _id: faq._id,
          question: translatedQuestion.text,
          answer: translatedAnswer.text,
        };
      })
    );

    await redisClient.set(`faqs_${lang}`, JSON.stringify(translatedFAQs), { EX: 3600 });

    res.json(translatedFAQs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const faq = new FAQ({ question, answer });
    await faq.save();

    res.status(201).json({ message: "FAQ added successfully", faq });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
