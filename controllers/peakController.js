const Peak = require("../models/peak");
class PeakController {
  async get(req, res) {
    const { number } = req.query;
    const peak = await Peak.findOne({
      number: number,
    });
    res.status(200).json(peak);
  }
  async create(req, res) {
    const peak = new Peak(req.body);
    try {
      const newPeak = await peak.save();
      res.status(201).json(newPeak);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new PeakController();
