const router = require("express").Router();
const specialsController = require("../../controllers/specialsController");

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
