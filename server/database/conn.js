import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from "../config.js";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  // const db = await mongoose.connect(getUri);
  const db = await mongoose.connect(ENV.ATLAS_URI);
  console.log("Database Connected");
  return db;
}

export default connect;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Mongoose Connected : ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error : ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;
