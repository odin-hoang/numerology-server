const router = require("express").Router();
const RulingNumberController = require("../controllers/rulingNumberController");
router.get("/", (req, res) => {
  res.status(200).json("Ruling Number Route");
});
router.get("/:number", RulingNumberController.index);
// router.post("/", RulingNumberController.create);
// router.put("/:number", RulingNumberController.update);
// router.delete("/:number", RulingNumberController.delete);
module.exports = router;
