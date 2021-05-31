const express = require("express")
const router = express.Router()
const db = require("../models/index")

router.post("/", async () => {
    await db.find({}, (err, res) => {
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router;
