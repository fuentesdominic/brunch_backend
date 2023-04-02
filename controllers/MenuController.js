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

const GetOneMenuItem = async (req, res) => {
	try {
		const itemId = parseInt(req.params.id)
		const item = await Menu.findOne({
			where: { id: itemId }
		})
		res.send(item)
	} catch (err) {
		throw err;
	}
}

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
		const id = req.params.id;
		const menu = await Menu.findByPk(id) 
		await Menu.destroy({
			where: { id }
		});
		return res.status(200).send({
			msg: `Menu item was deleted`,
			payload: menu,
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
    DeleteMenuById, 
	GetOneMenuItem
}