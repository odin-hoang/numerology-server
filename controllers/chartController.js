const Chart = require("../models/chart");
class ChartController {
  async get(req, res) {
    const { chart, name } = req.body;
    console.log("Tên:", name);
    let meaningChart = [];
    for (let index = 0; index < chart.length; index++) {
      let count = chart[index];
      if (count > 5) {
        count = 5;
      }
      if (count > 4 && index >= 2 && index <= 7) {
        count = 4;
      }
      const meaningNumber = await Chart.findOne({
        number: index + 1,
        count: count,
      });
      meaningChart.push(meaningNumber);
    }
    res.status(200).json(meaningChart);
  }
  async create(req, res) {
    const chart = new Chart(req.body);
    try {
      const newChart = await chart.save();
      res.status(201).json(newChart);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
module.exports = new ChartController();
