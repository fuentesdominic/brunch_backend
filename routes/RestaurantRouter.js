const router = require("express").Router();
const controller = require('../controllers/RestaurantController');
const middleware = require('../middleware');

router.get(
    "/", 
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllRestaurants);

router.get(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetRestaurantById);

router.post(
    '/create', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateRestaurant);

router.put(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateRestaurantById);

router.delete(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteRestaurantById);

module.exports = router;