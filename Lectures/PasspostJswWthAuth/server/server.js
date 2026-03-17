import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";

const app = express();

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;

app.listen(port, () => {
  connectDB();
  console.log(`Server start on http://localhost:${port}`);
});
