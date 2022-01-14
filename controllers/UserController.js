const { User } = require('../models');

const CreateUser = async (req, res) => {
  console.log(req.body);
  try {
    const users = await User.create(req.body);
    console.log(users);
    await users.save();
    return res.status(201).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!users) {
        res.status(500).send('Profile not found!');
      }
      return res.status(200).json(users);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Recipe deleted');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateUser,
  deleteUser,
  updateUser,
  getAllUsers
};
