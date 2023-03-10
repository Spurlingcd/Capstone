const mongoose = require("mongoose");

const scriptSchema = new mongoose.Schema({
  Reference: {
    type: String,
    required: true
  },
  Verse: {
    type: String,
    required: true
  }
});

const Scripture = mongoose.model("Scripture", scriptSchema);
module.exports = Scripture;
