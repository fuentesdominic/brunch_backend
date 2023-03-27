const { User } = require('../models');

const GetAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.send(users);
	} catch (err) {
		throw err;
	}
};

const CreateUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await User.create({
        name,
        email
      });
      res.send(user);
    } catch (err) {
      throw err;
    }
  };

module.exports = {
    GetAllUsers,
    CreateUser
}