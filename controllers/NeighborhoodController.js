const { Neighborhood } = require("../models")
const CreateNeighborhood = async (req, res) => {
  console.log(req.body)
  try {
    const neighborhoods = await Neighborhood.create(req.body)
    console.log(neighborhoods)
    await neighborhoods.save()
    return res.status(201).json({ neighborhoods })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.findAll()
    return res.status(200).json({ neighborhoods })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getNeighborhoodByZipcode = async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findOne({
      where: {
        zipcode: req.query.zipcode,
      },
    })
    return res.status(200).json(neighborhood)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateNeighborhood = async (req, res) => {
  try {
    let neighborhoodId = parseInt(req.params.neighborhood_id)
    let updatedNeighborhood = await Neighborhood.update(req.body, {
      where: { id: neighborhoodId },
      returning: true,
    })
    res.send(updatedNeighborhood)
  } catch (error) {
    throw error
  }
}

const deleteNeighborhood = async (req, res) => {
  try {
    let neighborhoodId = parseInt(req.params.neighborhood_id)
    await Neighborhood.destroy({ where: { id: neighborhoodId } })
    res.send({
      message: `Deleted neighborhood with an id of ${neighborhoodId}`,
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateNeighborhood,
  deleteNeighborhood,
  updateNeighborhood,
  getAllNeighborhoods,
  getNeighborhoodByZipcode,
}
