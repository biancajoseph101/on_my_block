const { CrimeTip } = require('../models');
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
    const tips = await CrimeTip.find();
    return res.status(200).json({ tips });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCrimeTip = async (req, res) => {
  try {
    const { id } = req.params;
    await CrimeTip.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, tips) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!tips) {
          res.status(500).send('Tip not found');
        }
        return res.status(200).json(tips);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteCrimeTip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CrimeTip.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('CrimeTip deleted');
    }
    throw new Error('CrimeTip not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateCrimeTip,
  deleteCrimeTip,
  updateCrimeTip,
  getAllCrimeTips
};
