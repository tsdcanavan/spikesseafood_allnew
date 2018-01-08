const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  meal: {type: String, required: true },
  dateoffered: String,
  date: { type: Date, default: Date.now }
});

const Special = mongoose.model("Special", specialSchema);

module.exports = Special;
