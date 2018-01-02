const router = require("express").Router();
const menuRoutes = require("./menus");

// Book routes
router.use("/menus", menuRoutes);

module.exports = router;
