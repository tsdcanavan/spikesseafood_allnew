const router = require("express").Router();
const menusController = require("../../controllers/menusController");

// Matches with "/api/books"
router
  .route("/")
  .get(menusController.findAll)
  .post(menusController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(menusController.findById)
  .put(menusController.update)
  .delete(menusController.remove);

module.exports = router;
