const router = require("express").Router();
const PersonalYearController = require("../controllers/personalYearController");
router.get("/", PersonalYearController.get);
// router.post("/", PersonalYearController.create);
module.exports = router;
