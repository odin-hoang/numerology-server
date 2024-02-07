const router = require("express").Router();
const ChartController = require("../controllers/chartController");
router.post("/", ChartController.get);
router.post("/number", ChartController.create);
module.exports = router;
