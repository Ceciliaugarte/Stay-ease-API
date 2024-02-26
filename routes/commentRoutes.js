const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});

router.use(checkToken);

/* router.get("/", commentController.index);
router.get("/:id", commentController.show); */
router.post("/", commentController.store);
/* router.patch("/:id", commentController.update); */
router.delete("/:id", commentController.destroy);

module.exports = router;
