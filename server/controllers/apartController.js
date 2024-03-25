const { Apartment } = require('../models/apart');

class ApartmentController {
  async addApart(req, res) {
    const { rooms, price, description, photo, type, square, kitchen, Bathroom, body } = req.body;
    const apart = await Apartment.create({
      rooms,
      price,
      description,
      photo,
      type,
      square,
      kitchen,
      Bathroom,
    });
    return res.json(apart);
  }
  async getApart(req, res) {
    const apart = await Apartment.findAll();
    return res.json(apart);
  }
}

module.exports = new ApartmentController();
