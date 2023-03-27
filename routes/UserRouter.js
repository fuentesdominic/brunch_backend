const router = require("express").Router();
const controller = require('../controllers/UserController');
const middleware = require('../middleware');

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllUsers);

router.post(
    '/create',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateUser);

module.exports = router;