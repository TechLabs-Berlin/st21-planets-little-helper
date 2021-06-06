const express = require("express")
const router = express.Router({mergeParams: true})

const {signUp, signIn, getAllUsers, saveUserChallenge} = require("../handlers/auth")

router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("/users", getAllUsers)
router.post("/:id/challenges", saveUserChallenge);
router.delete("/:id/challenges", saveUserChallenge);


module.exports = router;