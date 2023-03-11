const mongoose = require("mongoose");

const scriptSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: true
  },
  verse: {
    type: String,
    required: true
  }
});

const Scripture = mongoose.model("Scripture", scriptSchema);
module.exports = Scripture;
