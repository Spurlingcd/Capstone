const mongoose = require("mongoose");

const funSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  }
});

const Funnie = mongoose.model("Funnie", funSchema);
module.exports = Funnie;
