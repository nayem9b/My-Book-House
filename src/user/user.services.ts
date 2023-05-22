import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";

export const getBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({});
  return Userbooks;
};

export const getFantasyBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({ genre: "Fantasy" });
  // https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/
  return Userbooks;
};

// !Task 3:Find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
export const getScifiBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books",
  });
  return Userbooks;
};
export const updatePriceToIntFromDB = async () => {
  const Userbooks = await Books.updateMany(
    {
      price: { $type: "string" },
      publicationYear: { $gt: 2020 },
    },
    [
      {
        $set: {
          price: {
            $toInt: "$price",
          },
        },
      },
    ]
  );
  return Userbooks;
};
