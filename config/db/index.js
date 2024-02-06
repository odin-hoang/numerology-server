const mongoose = require("mongoose");
async function connect() {
  try {
    mongoose
      .connect(process.env.ATLAS_URI)
      .then(console.log("Connected to MongoDB"))
      .catch((err) => console.log("Failed to connect to MongoDB", err));
  } catch {
    (err) => console.log(err);
  }
}
module.exports = { connect };
