const mongoose = require("mongoose");

const affSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  }
});

const Affirmation = mongoose.model("Affirmation", affSchema);
module.exports = Affirmation;
