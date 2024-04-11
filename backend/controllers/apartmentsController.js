const { Apartments } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ApartmentConroller {
  async create(req, res) {
    const { name, price, typeId, info } = req.body;
    const { img } = req.files;
    let filename = uuid.v4 + '.png';
    img.mv(path.resolve(__dirname, '..', 'static', filename));
  }

  async get(req, res) {}

  async getOne(req, res) {}
}

module.exports = new ApartmentConroller();
