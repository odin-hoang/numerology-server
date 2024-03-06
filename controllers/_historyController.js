const History = require("../models/_history");
class HistoryController {
  async get(req, res) {
    const admin = req.headers["authorization"];
    if (admin != process.env.ADMIN) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const history = await History.find();
    res.status(200).json(history);
  }
  async create(req, res) {
    const history = new History(req.body);
    try {
      const newHistory = await history.save();
      res.status(201).json(newHistory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new HistoryController();
