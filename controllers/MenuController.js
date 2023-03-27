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
		});
		res.send(menu);
	} catch (err) {
		throw err;
	}
};

const CreateMenu = async (req, res) => {
	try {
		const { name } = req.body;
		const menu = await Menu.create({
			name
		});
		return res.status(200).send({
			msg: `Menu was created`,
			payload: menu
		});
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllMenus,
    GetMenuById,
    CreateMenu,
}