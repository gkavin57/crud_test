//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_url);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
