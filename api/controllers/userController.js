const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket, Profile } = require('../models/models');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, role, username) => {
  return jwt.sign({ id, email, role, username}, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async signUp(req, res, next) {
    const { email, password, username, firstname, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Email or password is not correct'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('Email already taken'));
    }

    const hashPassword = await bcrypt.hash(password, 4);
 

    const user = await User.create({
      email,
      username,
      role,
      password: hashPassword,
    });

    const profile = await Profile.create({
      userId: user.id,
      username: user.username,
      firstname: firstname
    })

    const token = generateToken(user.id, email, user.role, user.username);

    return res.json({ 
      username,
      token
     });
  }

  async signIn(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('User not found'));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return next(ApiError.internal('Invalid password'));
    }

    const token = generateToken(user.id, email, user.role);
    return res.json({ token });
  }

  async verify(req, res, next) {
    const token = generateToken(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
