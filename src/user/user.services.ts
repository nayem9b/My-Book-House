import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";

export const getBooksFromDB = async () => {
  // const booksCollection =mongoose.connection.("Books")

  const books = await Books.find();
  return "hello";
};
