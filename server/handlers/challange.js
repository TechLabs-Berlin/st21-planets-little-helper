const db = require("../models");

exports.getAllChallenges = async (req, res, next) => {
  try {
    const challenges = await db.ChallengeModel.find({});
    res.status(200).json(challenges);
  } catch (e) {
    return next(e);
  }
};

