const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialSchema = new Schema({
  category: { type: String, required: true },
  item: { type: String, required: true },
  status: String,
  date: { type: Date, default: Date.now }
});

const Special = mongoose.model("Special", menuSchema);

module.exports = Special;
