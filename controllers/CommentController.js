const { Comment } = require('../models');

const CreateComment = async (req, res) => {
  console.log(req.body);
  try {
    const comments = await Comment.create(req.body);
    console.log(comments);
    await products.save();
    return res.status(201).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comments) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!comments) {
          res.status(500).send('Comment not found!');
        }
        return res.status(200).json(comments);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Comment deleted');
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateComment,
  deleteComment,
  updateComment,
  getAllComments
};
