const mongoose = require("mongoose");
const soulUrgeSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  description: {
    type: String,
  },
});
const outerExpressionSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  description: {
    type: String,
  },
});
module.exports = {
  SoulUrge: mongoose.model("SoulUrge", soulUrgeSchema),
  OuterExpression: mongoose.model("OuterExpression", outerExpressionSchema),
};
