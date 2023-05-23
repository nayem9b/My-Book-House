import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();
const port: number = 5000;

// DB_USER = "nayem";
// DB_PASSWORD = "SqvH0NNaQWRXeEJl";
async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://nayem:SqvH0NNaQWRXeEJl@cluster0.dafmrk2.mongodb.net/MongooseAssignment`
    );
    // await mongoose.connect("mongodb://127.0.0.1:27017/BooksDatabase");
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
