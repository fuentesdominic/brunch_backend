const { User } = require('../models');
const middleware = require('../middleware');

const Register = async (req, res) => {
    console.log('authController')
      try {
          const { email, password } = req.body;
          let passwordDigest = await middleware.hashPassword(password);
          const user = await User.create({ email, password: passwordDigest });
          res.send(user);
      } catch (err) {
          throw err;
      }
  };
  
  module.exports = {
    Register,
  };