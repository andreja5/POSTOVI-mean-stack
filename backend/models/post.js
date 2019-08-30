const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  naslov: { type: String, require: true },
  opis: { type: String, require: true },
  imagePath: { type: String, require: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Post", postSchema);