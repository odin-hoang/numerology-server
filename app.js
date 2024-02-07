const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const rulingRoute = require("./routes/ruling-number");
const powerOfNameRoute = require("./routes/power-of-name");
const chartRoute = require("./routes/chart");
const arrowRoute = require("./routes/arrow");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
db.connect();
app.use("/api/ruling-number", rulingRoute);
app.use("/api/power-of-name", powerOfNameRoute);
app.use("/api/chart", chartRoute);
app.use("/api/arrow", arrowRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 2024;
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
