const { Recommendations } = require('../models');
const CreateRecommendations = async (req, res) => {
  console.log(req.body);
  try {
    const recommendations = await Recommendations.create(req.body);
    console.log(recommendations);
    await recommendations.save();
    return res.status(201).json({ recommendations });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const GetAllRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendations.find();
    return res.status(200).json({ recommendations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const UpdateRecommendations = async (req, res) => {
  try {
    const { id } = req.params;
    await Recommendations.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, recommendations) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!recommendations) {
          res.status(500).send('Recommendation not found!');
        }
        return res.status(200).json(recommendations);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const DeleteRecommendations = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recommendations.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Recommendations deleted');
    }
    throw new Error('Recommendations not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateRecommendations,
  DeleteRecommendations,
  UpdateRecommendations,
  GetAllRecommendations
};
