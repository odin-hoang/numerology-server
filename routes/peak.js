const router = require("express").Router();
const PeakController = require("../controllers/peakController");
router.get("/", PeakController.get);
router.post("/", PeakController.create);
module.exports = router;
