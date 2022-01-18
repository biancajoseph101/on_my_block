const { CrimeTip, Comment, Neighborhood } = require('../models');
const CreateCrimeTip = async (req, res) => {
  console.log(req.body);
  try {
    const tips = await CrimeTip.create(req.body);
    console.log(tips);
    await tips.save();
    return res.status(201).json({ tips });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllCrimeTips = async (req, res) => {
  try {
    const tips = await CrimeTip.findAll({
      include: [Comment]
    });
    return res.status(200).json({ tips });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getCrimeTipById = async (req, res) => {
  try {
    let crimeId = parseInt(req.params.crime_id);
    const tips = await CrimeTip.findByPk(crimeId);
    return res.status(200).json({ tips });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateCrimeTip = async (req, res) => {
  try {
    let crimeId = parseInt(req.params.crime_id);
    let updatedCrime = await CrimeTip.update(req.body, {
      where: { id: crimeId },
      returning: true
    });
    res.send(updatedCrime);
  } catch (error) {
    throw error;
  }
};
const deleteCrimeTip = async (req, res) => {
  try {
    let crimeId = parseInt(req.params.crime_id);
    await CrimeTip.destroy({ where: { id: crimeId } });
    res.send({ message: `Deleted crime with an id of ${crimeId}` });
  } catch (error) {
    throw error;
  }
};

const searchCrimeTip = async (req, res) => {
  try{
    // const {name} = req.query;
    let item = await CrimeTip.findAll({include: [{model: Neighborhood, where: {'zipcode' : req.query.zipcode}}]})
    return res.status(200).json({ item });
  }catch (error){
    return res.status(500).send(error.message);
  }
}

module.exports = {
  CreateCrimeTip,
  deleteCrimeTip,
  updateCrimeTip,
  getAllCrimeTips,
  getCrimeTipById,
  searchCrimeTip
};
