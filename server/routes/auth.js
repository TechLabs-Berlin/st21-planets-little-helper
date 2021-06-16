const express = require("express");
const router = express.Router({ mergeParams: true });

const { logInRequired, ensureCorrectUser } = require("../middleware/auth");

const {
  signUp,
  signIn,
  getAllUsers,
  saveUserChallenge,
  removeUserChallenge,
  getUser,
  toggleComplete,
} = require("../handlers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/users", getAllUsers);
router.get("/:id", getUser);
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

router.post(
  "/:id/completed",
  logInRequired,
  ensureCorrectUser,
  toggleComplete
);

module.exports = router;
