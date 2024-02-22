const { Comment, User, Property } = require("../models");

async function index(req, res) {
  const comments = await Comment.findAll();
  return res.json(comments);
}

async function show(req, res) {
  const commentId = req.params.id;
  const comment = await Comment.findByPk(commentId);
  return res.json(comment);
}

async function store(req, res) {
  const { comment, userId, propertyId } = req.body;
  const newComment = await Comment.create({ comment, userId, propertyId });
  return res.json(newComment);
}

async function update(req, res) {
  const commentId = req.params.id;
  const { comment, userId, propertyId } = req.body;
  await Comment.update({ comment, userId, propertyId }, { where: { id: commentId } });
  return res.json("Comment has been updated");
}

async function destroy(req, res) {
  const commentId = req.params.id;
  await Comment.destroy({ where: { id: commentId } });
  return res.json("Comment has been deleted");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
