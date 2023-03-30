const router = require("express").Router();
const controller = require('../controllers/MenuController');
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
    controller.GetMenuById);
    
router.post(
    '/create/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateMenu);
    
router.put(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateMenuById);
    
router.delete(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteMenuById);

module.exports = router;