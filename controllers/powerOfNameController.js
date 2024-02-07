const { SoulUrge, OuterExpression } = require("../models/power-of-name");

class PowerOfNameController {
  async index(req, res) {
    const { soulUrge, outerExpression } = req.query;
    console.log(soulUrge, outerExpression);
    const soulUrgeDoc = await SoulUrge.findOne({
      number: soulUrge,
    });
    const outerExpressionDoc = await OuterExpression.findOne({
      number: outerExpression,
    });
    res.json({ soulUrge: soulUrgeDoc, outerExpression: outerExpressionDoc });
  }
  async create(req, res) {
    const { soulUrge, outerExpression } = req.body;
    if (soulUrge === undefined || outerExpression === undefined) {
      return res.status(400).json({ message: "Invalid input" });
    }
    const soulUrgeObject = new SoulUrge(soulUrge);
    const outerExpressionObject = new OuterExpression(outerExpression);
    try {
      await soulUrgeObject.save();
      await outerExpressionObject.save();
      res.status(201).json({
        soulUrge: soulUrgeObject,
        outerExpression: outerExpressionObject,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const powerOfName = await PowerOfName.findOne({
      number: req.params.number,
    });
    if (powerOfName == null) {
      return res.status(404).json({ message: "Ruling Number not found" });
    }
    if (req.body.description != null) {
      powerOfName.description = req.body.description;
    }
    try {
      const updatedPowerOfName = await powerOfName.save();
      res.json(updatedPowerOfName);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async delete(req, res) {
    const powerOfName = await PowerOfName.findOne({
      number: req.params.number,
    });
    if (powerOfName == null) {
      return res.status(404).json({ message: "PowerOfName not found" });
    }
    try {
      await PowerOfName.deleteOne({ number: req.params.number });
      res.json({ message: "PowerOfName deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = new PowerOfNameController();
