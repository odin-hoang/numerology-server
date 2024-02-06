const RulingNumber = require("../models/ruling-number");

class RullingNumberController {
  // [GET] /api/ruling_number
  async index(req, res) {
    const rulingNumbers = await RulingNumber.find({
      number: req.params.number,
    });
    res.json(rulingNumbers);
  }
  async create(req, res) {
    const {
      number,
      description,
      summary,
      lifePurpose,
      bestExpression,
      distinctiveTraits,
      negativeTendencies,
      recommendedDevelopment,
      mostSuitableVocations,
    } = req.body;
    const rulingNumber = new RulingNumber({
      number,
      description,
      summary,
      lifePurpose,
      bestExpression,
      distinctiveTraits,
      negativeTendencies,
      recommendedDevelopment,
      mostSuitableVocations,
    });
    try {
      await rulingNumber.save();
      res.status(201).json(rulingNumber);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const rulingNumber = await RulingNumber.findOne({
      number: req.params.number,
    });
    if (rulingNumber == null) {
      return res.status(404).json({ message: "Ruling Number not found" });
    }
    if (req.body.description != null) {
      rulingNumber.description = req.body.description;
    }
    if (req.body.summary != null) {
      rulingNumber.summary = req.body.summary;
    }
    if (req.body.lifePurpose != null) {
      rulingNumber.lifePurpose = req.body.lifePurpose;
    }
    if (req.body.bestExpression != null) {
      rulingNumber.bestExpression = req.body.bestExpression;
    }
    if (req.body.distinctiveTraits != null) {
      rulingNumber.distinctiveTraits = req.body.distinctiveTraits;
    }
    if (req.body.negativeTendencies != null) {
      rulingNumber.negativeTendencies = req.body.negativeTendencies;
    }
    if (req.body.recommendedDevelopment != null) {
      rulingNumber.recommendedDevelopment = req.body.recommendedDevelopment;
    }
    if (req.body.mostSuitableVocations != null) {
      rulingNumber.mostSuitableVocations = req.body.mostSuitableVocations;
    }
    try {
      const updatedRulingNumber = await rulingNumber.save();
      res.json(updatedRulingNumber);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async delete(req, res) {
    const rulingNumber = await RulingNumber.findOne({
      number: req.params.number,
    });
    if (rulingNumber == null) {
      return res.status(404).json({ message: "Ruling Number not found" });
    }
    try {
      await RulingNumber.deleteOne({ number: req.params.number });
      res.json({ message: "Ruling Number deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new RullingNumberController();
