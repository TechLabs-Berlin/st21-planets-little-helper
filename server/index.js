require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 8000;
const errorHandler = require("./handlers/error");

const authRoutes = require("./routes/auth");
const challengesRoutes = require("./routes/challenges");

const app = express();
app.use(cors());
app.use("/uploads",express.static("uploads"))
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user", authRoutes);
app.use("/api/challenges", challengesRoutes);

app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT || port, () => {
  console.log(process.env.PORT)
  console.log(`Server started.`);
});
