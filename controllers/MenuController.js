const { Menu } = require('../models');
const restaurant = require('../models/restaurant');

const GetAllMenus = async (req, res) => {
	try {
	  const menus = await Menu.findAll();
	  res.send(menus);
	} catch (err) {
	  throw err;
	}
  };

  const GetMenuById = async (req, res) => {
	try {
		const restaurantId = parseInt(req.params.id);
		const menu = await Menu.findByPk(restaurantId, {
			// include: [
			// 	{
			// 		model: Student,
			// 		as: 'student_list',
			// 		through: { attributes: ['score'] }
			// 	}
			// ]
		});
		res.send(menu);
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllMenus,
    GetMenuById,
}