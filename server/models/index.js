const mongoose = require("mongoose");
const url = `mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@challenges.1a54e.mongodb.net/plh?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.User = require("./user")
module.exports.ChallengeModel = require("./challenge")