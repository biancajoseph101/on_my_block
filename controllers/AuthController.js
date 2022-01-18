const { User } = require('../models');
const middleware = require('../middleware');
const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    throw error;
  }
};

const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    //this next line is using the variable passwordDigest to scramble the password of the user -Calvin
    const user = await User.create({ email, passwordDigest, username });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.params.user_id);
    if (
      user &&
      (await middleware.comparePassword(user.dataValues.password, oldPassword))
    ) {
      //the same thing for this next line as well -Calvin
      let passwordDigest = await middleware.hashPassword(newPassword);
      await user.update({ passwordDigest });
      return res.send({ status: 'Ok', payload: user });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {}
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

module.exports = {
  Login,
  Signup,
  UpdatePassword,
  CheckSession
};
