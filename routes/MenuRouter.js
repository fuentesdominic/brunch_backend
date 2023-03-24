const router = require("express").Router();
const controller = require('../controllers/AuthController');
const middleware = require('../middleware');

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllMenus);

router.get(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetCourseById);
    
router.post(
    '/create', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateCourse);
    
router.put(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateCourseById);
    
router.delete(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteCourseById);

module.exports = router;