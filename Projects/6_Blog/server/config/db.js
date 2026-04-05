const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config/config.env",
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jinalrathod594_db_user:jinal_594@cluster0.qwbepcd.mongodb.net/");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

module.exports = connectDB;