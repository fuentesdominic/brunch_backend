const { Menu } = require('../models');

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
		const menu = await Menu.findAll({
			where: { restaurantId: restaurantId}
		});
		res.send(menu);
	} catch (err) {
		throw err;
	}
};

const CreateMenu = async (req, res) => {
	try {
		const { item, price } = req.body;
		const restaurantId = parseInt(req.params.id)
		const menu = await Menu.create({
			item, 
            price,
			restaurantId
		});
		return res.status(200).send({
			msg: `Menu was created`,
			payload: menu
		});
	} catch (err) {
		throw err;
	}
};

const UpdateMenuById = async (req, res) => {
	try {
		const restaurantId = parseInt(req.params.id);
		const updatedMenu = await Menu.update(req.body, {
			where: { id: restaurantId },
			returning: true
		});
		return res.status(200).send({
			msg: `Menu with id ${restaurantId} was updated`,
			payload: updatedMenu
		});
	} catch (err) {
		throw err;
	}
};

const DeleteMenuById = async (req, res) => {
	try {
		await Menu.destroy({
			where: { id: +req.params.restaurantId }
		});
		res.send({
			msg: `Item was deleted`,
			payload: req.params.restaurantId,
			staus: 'Ok'
		});
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllMenus,
    GetMenuById,
    CreateMenu,
    UpdateMenuById,
    DeleteMenuById
}