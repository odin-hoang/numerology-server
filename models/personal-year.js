const mongoose = require("mongoose");
const personalYearSchema = mongoose.Schema({
  personalYear: {
    type: Number,
  },
  month: {
    type: Number,
  },
  meaning: {
    type: String,
  },
  description: {
    type: String,
  },
});
module.exports = mongoose.model("PersonalYear", personalYearSchema);
