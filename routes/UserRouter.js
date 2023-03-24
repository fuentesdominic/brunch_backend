const router = require("express").Router();
const controller = require('../controllers/GradeController');
const middleware = require('../middleware');

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllUsers);

module.exports = router;