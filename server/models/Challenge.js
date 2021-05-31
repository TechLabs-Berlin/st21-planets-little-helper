const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    category: String,
    title: String,
    action: String,
    duration: String,
    impact: String
})

const ChallengeModel = mongoose.model('challenges', challengeSchema)

module.exports = ChallengeModel;