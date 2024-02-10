const Day = require("../models/day");
class DayController {
  async get(req, res) {
    const { number } = req.query;
    const dayObject = await Day.findOne({
      number: number,
    });
    res.status(200).json(dayObject);
  }
  async create(req, res) {
    const day = new Day(req.body);
    try {
      const newDay = await day.save();
      res.status(201).json(newDay);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new DayController();
