const { User } = require('../models');

const GetAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.send(users);
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllUsers,
}