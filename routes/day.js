const router = require("express").Router();
const DayController = require("../controllers/dayController");
router.get("/", DayController.get);
// router.post("/", DayController.create);
module.exports = router;
