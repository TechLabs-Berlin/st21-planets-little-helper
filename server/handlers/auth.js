const db = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signIn = async function (req, res, next) {
  // finding a user
  try {
    let user = await db.User.findOne({
      email: req.body.email,
    });
    let { id, username, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl,
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password.",
      });
    }
  } catch (e) {
    console.log(e);
    return next({ status: 400, message: "Invalid email or password." });
  }
};

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

exports.getAllUsers = async (req, res) => {
  await db.User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.saveUserChallenge = async (req, res) => {
  const { challengeId } = req.body;
  const userId = req.params.id;
  try {    
    await db.User.findByIdAndUpdate(
      userId,
      {
        $push: { challenges: challengeId },
      },
      { new: true }
    );
    const user = await db.User.findById(userId);
    console.log(user);
    res.status(200).json({ message: challengeId });
  } catch (e) {
    res.send(e);
  }
};    


exports.saveUserChallenge = async (req, res) => {
  const { challengeId } = req.body;
  const userId = req.params.id;
  try {    
    await db.User.findByIdAndUpdate(
      userId,
      {
        $pull: { challenges: challengeId },
      },
      { new: true }
    );
    const user = await db.User.findById(userId);
    console.log(user);
    res.status(200).json({ message: challengeId });
  } catch (e) {
    res.send(e);
  }
};  
