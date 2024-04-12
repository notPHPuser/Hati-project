const { User, Liked } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJWT = (id, email, login, role) => {
  return jwt.sign({ id, login, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    const { login, email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badReq('неккоректный email или password'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badReq('пользватель с таким email уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ login, email, password: hashPassword, role });
    const liked = await Liked.create({ userId: user.id });
    const token = generateJWT(user.id, user.email, user.login, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { login, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !login) {
      return next(ApiError.interal('пользователь не найден'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.interal('неверный пароль'));
    }
    const token = generateJWT(user.id, user.login, user.email, user.role);
    return res.json({ token });
  }

  async auth(req, res, next) {
    const token = generateJWT(req.user.id, req.user.login, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
