const PersonalYear = require("../models/personal-year");
class PersonalYearController {
  async get(req, res) {
    const { personalYear } = req.query;
    const py = await PersonalYear.find({
      personalYear: personalYear,
    }).sort({ month: 1 });
    res.status(200).json(py);
  }
  async create(req, res) {
    const py = new PersonalYear(req.body);
    try {
      const newPy = await py.save();
      res.status(201).json(newPy);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new PersonalYearController();
