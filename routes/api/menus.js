const router = require("express").Router();
const menusController = require("../../controllers/menusController");

// Matches with "/api/menus"
router
  .route("/")
  .get(menusController.findAll)
  .post(menusController.create);

// Matches with "/api/menus/:id"
router
  .route("/:id")
  .get(menusController.findById)
  .put(menusController.update)
  .delete(menusController.remove);

router
  .route("/specials")  
  .get(specialsController.findAll)
  .post(specialsController.create);
  
module.exports = router;
