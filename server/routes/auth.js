const express = require("express")
const router = express.Router()

const {signUp, signIn, getAllUsers} = require("../handlers/auth")

router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("/users", getAllUsers)

module.exports = router;