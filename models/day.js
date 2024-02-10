const mongoose = require("mongoose");
const daySchema = mongoose.Schema({
  number: {
    type: Number,
  },
  meaning: {
    type: String,
  },
});
module.exports = mongoose.model("Day", daySchema);
