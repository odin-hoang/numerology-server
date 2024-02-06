const mongoose = require("mongoose");
const rulingNumberSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  description: {
    type: String,
  },
  summary: {
    type: String,
  },
  lifePurpose: {
    type: String,
  },
  bestExpression: {
    type: String,
  },
  distinctiveTraits: {
    type: String,
  },
  negativeTendencies: {
    type: String,
  },
  recommendedDevelopment: {
    type: String,
  },
  mostSuitableVocations: {
    type: String,
  },
});
module.exports = mongoose.model("RulingNumber", rulingNumberSchema);
