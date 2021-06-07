const express = require("express");
const router = express.Router({ mergeParams: true });

const { logInRequired, ensureCorrectUser } = require("../middleware/auth");

const {
  signUp,
  signIn,
  getAllUsers,
  saveUserChallenge,
  removeUserChallenge,
} = require("../handlers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/users", getAllUsers);
router.post(
  "/:id/challenges",
  logInRequired,
  ensureCorrectUser,
  saveUserChallenge
);
router.delete(
  "/:id/challenges",
  logInRequired,
  ensureCorrectUser,
  removeUserChallenge
);

module.exports = router;
