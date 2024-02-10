const morgan = require("morgan");
const router = require("express").Router();
const ChartController = require("../controllers/chartController");
router.use(morgan("combined"));
router.post("/", ChartController.get);
router.post("/number", ChartController.create);
module.exports = router;
