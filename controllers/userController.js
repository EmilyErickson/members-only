const Message = require("../models/message");
const User = require("../models/user");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display User create form on GET.
exports.user_create_get = (req, res, next) => {
  res.render("sign-up-form", { title: "Create User" });
};
