const passport = require("passport");

const User = require("../models/users");
const Message = require("../models/messages");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // const allMessages = await Message.find({}, "title text")
  //   .sort({ title: 1 })
  //   .populate("text")
  //   .exec();
  const allMessages = [
    { title: "First", text: "text" },
    { title: "Second", text: "lorem ispum" },
  ];

  res.render("index", {
    title: "The Clubhouse",
    allMessages: allMessages,
  });
});

exports.signUp_create_get = (req, res) => {
  res.render("signup", {
    title: "Sign Up",
  });
};

exports.signUp_create_post = [
  body("firstname")
    .trim()
    .isLength({ min: 1 })
    .withMessage("First name must not be empty")
    .escape(),
  body("lastname")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Last name must not be empty")
    .escape(),
  body("email").trim().isEmail().withMessage("Invalid email address").escape(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .escape(),
  body("passwordconfirm")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const user = new User({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      isMember: false,
      isAdmin: false,
    });

    if (!errors.isEmpty()) {
      res.render("signup", {
        title: "Sign Up",
        user: user,
        errors: errors.array(),
      });
    } else {
      await user.save();
      res.redirect("/login");
    }
  }),
];

exports.login_create_get = (req, res) => {
  res.render("login", {
    title: "Login",
  });
};

exports.login_create_post = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("no user");
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      console.log(user);
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
};

exports.member_create_get = (req, res) => {
  // Implement your membership get route logic here
};

exports.member_create_post = (req, res) => {
  // Implement your membership post route logic here
};

exports.admin_create_get = (req, res) => {
  // Implement your admin get route logic here
};

exports.admin_create_post = (req, res) => {
  // Implement your admin post route logic here
};
