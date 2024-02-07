const router = require("express").Router();
const PowerOfNameController = require("../controllers/powerOfNameController");
router.get("/", PowerOfNameController.index);
router.post("/", PowerOfNameController.create);
router.put("/", PowerOfNameController.update);
router.delete("/", PowerOfNameController.delete);
module.exports = router;
