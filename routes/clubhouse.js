const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");
const message_controller = require("../controllers/messageController");

//GET clubhouse home page
router.get("/", message_controller.index);

//Get request for creating a user
router.get("/clubhouse/sign-up", user_controller.user_create_get);

module.exports = router;
