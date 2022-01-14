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
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({ where: { id: userId } });
    res.send({ message: `Deleted user with an id of ${userId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateUser,
  deleteUser,
  updateUser,
  getAllUsers
};
