const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error({ message: "File not accepted" }), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

const { logInRequired, ensureCorrectUser } = require("../middleware/auth");

const {
  signUp,
  signIn,
  getAllUsers,
  saveUserChallenge,
  removeUserChallenge,
  getUser,
  toggleComplete,
  updateProfilePic,
} = require("../handlers/auth");

router.post("/signup", upload.single("imageUrl"), signUp);
router.post("/signin", upload.single("imageUrl"), signIn);
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

router.post("/:id/completed", logInRequired, ensureCorrectUser, toggleComplete);

router.post("/:id/image", logInRequired, ensureCorrectUser, upload.single("avatar"), updateProfilePic);

module.exports = router;
