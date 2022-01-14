const { Neighborhood } = require('../models');
const CreateNeighborhood = async (req, res) => {
  console.log(req.body);
  try {
    const neighborhoods = await Neighborhood.create(req.body);
    console.log(neighborhoods);
    await neighborhoods.save();
    return res.status(201).json({ neighborhoods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find();
    return res.status(200).json({ neighborhoods });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateNeighborhood = async (req, res) => {
  try {
    const { id } = req.params;
    await Neighborhood.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, neighborhoods) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!neighborhoods) {
          res.status(500).send('Location not found!');
        }
        return res.status(200).json(neighborhoods);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteNeighborhood = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Neighborhood.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Neighborhood deleted');
    }
    throw new Error('Neighborhood not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateNeighborhood,
  deleteNeighborhood,
  updateNeighborhood,
  getAllNeighborhoods
};
