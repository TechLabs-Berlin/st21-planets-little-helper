const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ChallengeModel = require("./models/Challenge");
const challenges = require("../client/src/data/challenges");
require('dotenv').config()

const url = `mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@challenges.1a54e.mongodb.net/plh?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLOOOO WHERE AM I?");
});

// ChallengeModel.insertMany(challenges, function(error, docs) {})

app.get("/challenges", async (req, res) => {
    await ChallengeModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(8000, () => {
  console.log("Server started at port 8000.");
});
