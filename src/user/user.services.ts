import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";

export const getBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({});
  return Userbooks;
};

export const getFantasyBooksFromDB = async (): Promise<IBooks[]> => {
  const Userbooks = await Books.find({ genre: "Fantasy" });
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

// ! Task 4: Add a field named Featured where, books rating greater than 4.5 would be featured as "Best Seller" and rating greater than 4.0 would be featured as "popular"
export const getFeaturedBooksFromDB = async () => {
  const featuredBooks = await Books.aggregate([
    { $match: { rating: { $gte: 4.0 } } },

    {
      $addFields: {
        featured: {
          $switch: {
            branches: [
              {
                case: { $lt: ["$rating", 4.5] },
                then: "Popular",
              },
              {
                case: { $gte: ["$rating", 4.5] },
                then: "Best Seller",
              },
            ],
            default: "",
          },
        },
      },
    },

    { $sort: { rating: -1 } },
    { $project: { title: 1, rating: 1, featured: 1 } },
  ]);

  return featuredBooks;
};

// ! Task 5 : Update price from String to Integer
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
  // !Reference :   https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany [Update with an Aggregation Pipeline]
  return Userbooks;
};
