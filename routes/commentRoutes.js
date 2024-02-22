const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/", commentController.index);
router.get("/:id", commentController.show);
router.post("/", commentController.store);
router.patch("/:id", commentController.update);
router.delete("/:id", commentController.destroy);

module.exports = router;
