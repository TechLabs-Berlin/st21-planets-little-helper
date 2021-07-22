// require("dotenv").config();
// const mongoose = require("mongoose");
// const url = `mongodb://planetslittlehelper:${process.env.MDB_PASSWORD}@challenges-shard-00-00.1a54e.mongodb.net:27017,challenges-shard-00-01.1a54e.mongodb.net:27017,challenges-shard-00-02.1a54e.mongodb.net:27017/plh?ssl=true&replicaSet=atlas-9zj051-shard-0&authSource=admin&retryWrites=true&w=majority`;
// const uri = process.env.MONGODB_URI;

// exports.connect = async () => {
//   await mongoose
//     .connect(uri || url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then(() => {
//       console.log("db connected");
//     })
//     .catch((error) => console.log("error connecting to DB : ", error));
// };

module.exports.User = require("./user");
module.exports.ChallengeModel = require("./challenge");
