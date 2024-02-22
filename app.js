const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const rulingRoute = require("./routes/ruling-number");
const powerOfNameRoute = require("./routes/power-of-name");
const chartRoute = require("./routes/chart");
const arrowRoute = require("./routes/arrow");
const dayRoute = require("./routes/day");
const personalYearRoute = require("./routes/personal-year");
const peakRoute = require("./routes/peak");
const _historyRoute = require("./routes/_history");
const app = express();
// app.use(morgan("combined"));
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
app.use("/api/day", dayRoute);
app.use("/api/personal-year", personalYearRoute);
app.use("/api/peak", peakRoute);
app.use("/api/history", _historyRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 2024;
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
