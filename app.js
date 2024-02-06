const express = require("express");
const db = require("./config/db");
const dotenv = require("dotenv");
const rulingRoute = require("./routes/ruling-number");

const app = express();
app.use(express.json());
dotenv.config();
db.connect();
app.use("/api/ruling-number", rulingRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 2024;
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
