const Arrow = require("../models/arrow");
class ArrowController {
  async get(req, res) {
    const { arrow, filled } = req.query;
    const arrowObject = await Arrow.findOne({
      arrow: arrow,
      filled: filled,
    });
    res.status(200).json(arrowObject);
  }
  async create(req, res) {
    const arrow = new Arrow(req.body);
    try {
      const newArrow = await arrow.save();
      res.status(201).json(newArrow);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const { arrow, filled, meaning } = req.body;
    const arrowObject = await Arrow.findOne({
      arrow: arrow,
      filled: filled,
    });
    if (arrowObject == null) {
      return res.status(404).json({ message: "Arrow not found" });
    }
    if (meaning) {
      arrowObject.meaning = meaning;
    }
    try {
      const newArrow = await arrowObject.save();
      res.status(201).json(newArrow);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new ArrowController();
