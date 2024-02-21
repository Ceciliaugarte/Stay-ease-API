const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

router.get("/", propertyController.index);
router.get("/:id", propertyController.show);
router.get("/", propertyController.create);
router.post("/", propertyController.store);
router.get("/:id", propertyController.edit);
router.patch("/:id", propertyController.update);
router.delete("/:id", propertyController.destroy);

module.exports = router;
