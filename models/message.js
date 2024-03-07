const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  title: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Message", messageSchema);
