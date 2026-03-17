import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully....!");
  } catch (err) {
    console.log("MongoDB is not connectd....!", err);
  }
};

export default connectDB;
