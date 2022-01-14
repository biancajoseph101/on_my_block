const { Comment } = require('../models');

const CreateComment = async (req, res) => {
  console.log(req.body);
  try {
    const comments = await Comment.create(req.body);
    console.log(comments);
    await comments.save();
    return res.status(201).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    });
    res.send(updatedComment);
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    await Comment.destroy({ where: { id: commentId } });
    res.send({ message: `Deleted comment with an id of ${commentId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  deleteComment,
  updateComment,
  getAllComments
};
