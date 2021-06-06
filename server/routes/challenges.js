const express = require("express");
const router = express.Router();
const {getAllChallenges} = require("../handlers/challange")

router.get("/", getAllChallenges)

module.exports = router;
