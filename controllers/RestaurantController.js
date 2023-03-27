const { Restaurant } = require('../models');

const GetAllRestaurants = async (req, res) => {
	try {
	  const restaurants = await Restaurant.findAll();
	  res.send(restaurants);
	} catch (err) {
	  throw err;
	}
  };

  const GetRestuarantById = async (req, res) => {
	try {
		const restaurantId = parseInt(req.params.id);
		const restaurant = await Restaurant.findByPk(restaurantId, {
		});
		res.send();
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllRestaurants,
}