const { Restaurant } = require('../models');
const restaurant = require('../models/restaurant');

const GetAllRestaurants = async (req, res) => {
	try {
	  const restaurants = await Restaurant.findAll();
	  res.send(restaurants);
	} catch (err) {
	  throw err;
	}
  };

  const GetRestaurantById = async (req, res) => {
	try {
		const restaurantId = parseInt(req.params.id);
		const restaurant = await Restaurant.findByPk(restaurantId, {
		});
		res.send(restaurant);
	} catch (err) {
		throw err;
	}
};

const CreateRestaurant = async (req, res) => {
	try {
		const { name, mile_marker } = req.body;
		const restaurant = await Restaurant.create({
			name,
            mile_marker
		});
		return res.status(200).send({
			msg: `Restaurant was created`,
			payload: restaurant
		});
	} catch (err) {
		throw err;
	}
};

const UpdateRestaurantById = async (req, res) => {
	try {
		const restaurantId = parseInt(req.params.id);
		const updatedRestaurant = await Restaurant.update(req.body, {
			where: { id: restaurantId },
			returning: true
		});
		return res.status(200).send({
			msg: `Student with id ${restaurant.Id} was updated`,
			payload: updatedRestaurant
		});
	} catch (err) {
		throw err;
	}
};

module.exports = {
    GetAllRestaurants,
    GetRestaurantById,
    CreateRestaurant,
    UpdateRestaurantById
}