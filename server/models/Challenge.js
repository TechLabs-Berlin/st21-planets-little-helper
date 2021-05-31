const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    title: String,
    description: String,
    challenge: String,
    category: String,
})

const ChallengeModel = mongoose.model('challenges', challengeSchema)

module.exports = ChallengeModel;