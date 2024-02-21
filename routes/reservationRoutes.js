const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/", reservationController.index);
router.get("/:id", reservationController.show);
router.get("/", reservationController.create);
router.post("/", reservationController.store);
router.get("/:id", reservationController.edit);
router.patch("/:id", reservationController.update);
router.delete("/:id", reservationController.destroy);

module.exports = router;
