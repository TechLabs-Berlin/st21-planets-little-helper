const mongoose = require("mongoose");
const url = `mongodb://${process.env.MDB_PASSWORD}:plh_techLabs2021@challenges-shard-00-00.1a54e.mongodb.net:27017,challenges-shard-00-01.1a54e.mongodb.net:27017,challenges-shard-00-02.1a54e.mongodb.net:27017/challenges?ssl=true&replicaSet=atlas-9zj051-shard-0&authSource=admin&retryWrites=true&w=majority`;

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    });

module.exports.User = require("./user")
module.exports.ChallengeModel = require("./challenge")