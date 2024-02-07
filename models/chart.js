const mongoose = require("mongoose");
const chartSchema = mongoose.Schema({
  number: {
    type: Number,
  },
  description: {
    type: String,
  },
  count: {
    type: Number,
  },
  meaning: {
    type: String,
  },
});
module.exports = mongoose.model("Chart", chartSchema);
