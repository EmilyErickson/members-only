const Message = require("../models/message");
const User = require("../models/user");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  //   const allMessages = (await Message.find({}).exec()) || [];
  const allMessages = [{ text: "test" }, { text: "Hello, world" }];

  res.render("index", {
    title: "Members only",
    allMessages: allMessages,
  });
});
