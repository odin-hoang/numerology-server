const mongoose = require("mongoose");
const peakSchema = mongoose.Schema({
  number: {
    type: Number,
  },
  meaning: {
    type: String,
  },
});
module.exports = mongoose.model("Peak", peakSchema);
