const { Comment } = require("../models");

async function store(req, res) {
  const { comment, userId, propertyId } = req.body;
  const newComment = await Comment.create({ comment, userId, propertyId });
  return res.json(newComment);
}

async function destroy(req, res) {
  const commentId = req.params.id;
  await Comment.destroy({ where: { id: commentId } });
  return res.json("Comment has been deleted");
}

module.exports = {
  store,
  destroy,
};
