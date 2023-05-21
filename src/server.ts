import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();
const port: number = 5000;

async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dafmrk2.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(
      `Database connection successful, ${process.env.DB_USER} , ${process.env.DB_PASSWORD}`
    );
    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`failed to connect to database`, err);
  }
}

dbConnect();
