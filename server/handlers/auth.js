const db = require("../models");
const jwt = require("jsonwebtoken");
const { Mongoose } = require("mongoose");
require("dotenv").config();

exports.signIn = async function (req, res, next) {
  // finding a user
  try {
    let user = await db.User.findOne({
      email: req.body.email,
    });
    let { id, username, imageUrl, challenges, email } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          imageUrl,
          email,
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        imageUrl,
        email,
        token,
        challenges,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password.",
      });
    }
  } catch (e) {
    return next({ status: 400, message: "Invalid email or password." });
  }
};

exports.signUp = async (req, res, next) => {
  try {
    //create user
    console.log(req.file);
    let user = await db.User.create({imageUrl: req.file.path, ...req.body});
    let { id, username, imageUrl, challenges, email } = user;
    // create token
    let token = jwt.sign({ id, username, imageUrl }, process.env.SECRET_KEY);
    return res.status(200).json({
      id,
      username,
      email,
      imageUrl,
      challenges,
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

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await db.User.find({});
    res.status(200).json(users);
  } catch (e) {
    return next(e);
  }
};

exports.getUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await db.User.findById(userId);
    res.status(200).json(user);
  } catch (e) {
    return next(e);
  }
};

exports.saveUserChallenge = async (req, res, next) => {
  const { challengeId } = req.body;
  const userId = req.params.id;
  try {
    const challenge = await db.ChallengeModel.findById(challengeId);
    const { title, description } = challenge;

    await db.User.findByIdAndUpdate(
      userId,
      {
        $push: {
          challenges: {
            id: challengeId,
            title: title,
            description: description,
            completed: false,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({
      id: challengeId,
      title: title,
      description: description,
      completed: false,
    });
  } catch (e) {
    return next(e);
  }
};

exports.removeUserChallenge = async (req, res) => {
  const { challengeId } = req.body;
  const userId = req.params.id;
  try {
    await db.User.findByIdAndUpdate(
      userId,
      {
        $pull: { challenges: { id: challengeId } },
      },
      { new: true }
    );
    res.status(200).json({ message: challengeId });
  } catch (e) {
    return next(e);
  }
};

exports.toggleComplete = async (req, res) => {
  let { challengeId, update } = req.body;
  const userId = req.params.id;

  update = JSON.parse(update);

  try {
    await db.User.updateOne(
      { _id: userId, "challenges.id": challengeId },
      {
        $set: {
          "challenges.$.completed": update,
        },
      }
    );
    res.status(200).json({ message: "updated completed property" });
  } catch (e) {
    return next(e);
  }
};
