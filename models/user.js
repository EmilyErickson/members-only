const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  username: { type: String, required: true, maxLength: 100 },
  password: { type: String },
  is_member: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
