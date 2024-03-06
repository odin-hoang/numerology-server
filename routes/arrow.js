const router = require("express").Router();
const ArrowController = require("../controllers/arrowController");
router.get("/", ArrowController.get);
// router.post("/", ArrowController.create);
// router.put("/", ArrowController.update);
module.exports = router;
