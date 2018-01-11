const router = require("express").Router();
const menusController = require("../../controllers/menusController");
const specialsController = require("../../controllers/specialsController");

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

router
  .route("/specials/:id")
  .get(specialsController.findById)
  .put(specialsController.update)
  .delete(specialsController.remove);
 
module.exports = router;
