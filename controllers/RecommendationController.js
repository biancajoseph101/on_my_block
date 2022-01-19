const { Recommendation, Neighborhood } = require('../models');

const CreateRecommendation = async (req, res) => {
  console.log(req.body);
  try {
    const recommendations = await Recommendation.create(req.body);
    console.log(recommendations);
    await recommendations.save();
    return res.status(201).json({ recommendations });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getRecommendationById = async (req, res) => {
  try {
    let recommendationId = parseInt(req.params.recommendation_id);
    const recommendation = await Recommendation.findByPk(recommendationId);
    return res.status(200).json({ recommendation });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const GetRecommendationsByNeighborhood = async (req, res) => {
  try {
    const neighborhoodRecommendations = await Recommendation.findAll({
      include: [{ model: Neighborhood, where: { zipcode: req.query.zipcode } }]
    });
    return res.status(200).json({ neighborhoodRecommendations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const GetAllRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.findAll();
    return res.status(200).json({ recommendations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const UpdateRecommendation = async (req, res) => {
  try {
    let recommendationId = parseInt(req.params.recommendation_id);
    let updatedRecommendation = await Recommendation.update(req.body, {
      where: { id: recommendationId },
      returning: true
    });
    res.send(updatedRecommendation);
  } catch (error) {
    throw error;
  }
};

const DeleteRecommendation = async (req, res) => {
  try {
    let recommendationId = parseInt(req.params.recommendation_id);
    await Recommendation.destroy({ where: { id: recommendationId } });
    res.send({ message: `Deleted rec with an id of ${recommendationId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateRecommendation,
  DeleteRecommendation,
  UpdateRecommendation,
  GetAllRecommendations,
  GetRecommendationsByNeighborhood,
  getRecommendationById
};
