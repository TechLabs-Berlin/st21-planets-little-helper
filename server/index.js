require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const port = 8000;
const errorHandler = require("./handlers/error");

const authRoutes = require("./routes/auth");
const challengesRoutes = require("./routes/challenges");
// const { connect } = require("./models/index");

const url = `mongodb://planetslittlehelper:${process.env.MDB_PASSWORD}@challenges-shard-00-00.1a54e.mongodb.net:27017,challenges-shard-00-01.1a54e.mongodb.net:27017,challenges-shard-00-02.1a54e.mongodb.net:27017/plh?ssl=true&replicaSet=atlas-9zj051-shard-0&authSource=admin&retryWrites=true&w=majority`;
const uri = process.env.MONGODB_URI;

const app = express();

mongoose.set('bufferCommands', false);
// app.use(cors());
// app.use("/uploads", express.static("uploads"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/user", authRoutes);
// app.use("/api/challenges", challengesRoutes);

// app.use((req, res, next) => {
//   let err = new Error("Not found");
//   err.status = 404;
//   next(err);
// });

// app.use(errorHandler);

// connect();

// app.listen(process.env.PORT || port, () => {
//   console.log(`Server started.`);
// });

async function main() {
  await mongoose
    .connect(uri || url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:false,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => console.log("error connecting to DB : ", error));

  app.use(cors());
  app.use("/uploads", express.static("uploads"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/user", authRoutes);
  app.use("/api/challenges", challengesRoutes);

  app.use((req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
  });

  app.use(errorHandler);

  app.listen(process.env.PORT || port, () => {
    console.log(`Server started.`);
  });
}

main();

