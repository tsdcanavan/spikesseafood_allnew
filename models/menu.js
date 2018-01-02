const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  category: { type: String, required: true },
  item: { type: String, required: true },
  status: String,
  date: { type: Date, default: Date.now }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
