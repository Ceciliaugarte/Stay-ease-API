const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.get("/", photoController.index);
router.get("/:id", photoController.show);
router.get("/", photoController.create);
router.post("/", photoController.store);
router.get("/:id", photoController.edit);
router.patch("/:id", photoController.update);
router.delete("/:id", photoController.destroy);

module.exports = router;
