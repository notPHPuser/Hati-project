const { Apartments, ApartmentsInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class ApartmentController {
  async create(req, res) {
    const { name, price, typeId, info } = req.body;
    const { img } = req.files;
    let filename = uuid.v4() + '.png';
    img.mv(path.resolve(__dirname, '..', 'static', filename));
    const apartment = await Apartments.create({ name, price, typeId, img: filename });

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) =>
        ApartmentsInfo.create({
          apartmentId: apartment.id,
          description: i.description,
          squere: i.squere,
          squere_living: i.squere_living,
          squere_kitchen: i.squere_kitchen,
          floor: i.floor,
          bathroom: i.bathroom,
        }),
      );
    }

    return res.json(apartment);
  }

  async get(req, res) {
    // const apart = await Apartments.findAll();
    // return res.json(apart);
    const { typeId } = req.query;

    let apartment;
    if (!typeId) {
      apartment = await Apartments.findAndCountAll();
    }
    if (typeId) {
      apartment = await Apartments.findAndCountAll({ where: { typeId } });
    }
    return res.json(apartment);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const apartment = await Apartments.findOne({
      where: { id },
      include: [{ model: ApartmentsInfo, as: 'info' }],
    });
    return res.json(apartment);
  }
}

module.exports = new ApartmentController();
