const router = require("express").Router();
const menuRoutes = require("./menus");
const specialRoutes = require("./specials");

// Menu routes
router.use("/menus", menuRoutes);
// Special routes
router.use("/specials", specialRoutes);

module.exports = router;
