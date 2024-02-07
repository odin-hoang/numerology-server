const mongoose = require("mongoose");
const arrowSchema = mongoose.Schema({
  arrow: {
    type: String,
  },
  filled: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  meaning: {
    type: String,
  },
});
module.exports = mongoose.model("Arrow", arrowSchema);
