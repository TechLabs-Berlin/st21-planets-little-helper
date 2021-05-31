const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signIn = () => {};

exports.signUp = async (req, res, next) => {
  try {
    //create user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    // create token
    let token = jwt.sign(
      { id, username, profileImageUrl },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken.";
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};
