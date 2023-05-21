import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";
const stringify = require("json-stable-stringify");

export const getBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({ genre: "Fantasy" });
  // const fantasy = Books.find({ genre: "Fantasy" });
  // console.log(fantasy);
  return Userbooks;
};
