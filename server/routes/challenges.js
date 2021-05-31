const express = require("express");
const router = express.Router();
const db = require("../models")


// to insert challenges in the DB
// const chal = require("../../client/src/data/challenges")
// db.ChallengeModel.insertMany(chal, function(error, docs) {});


router.get("/", async (req, res) => {
     await db.ChallengeModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})



module.exports = router;
