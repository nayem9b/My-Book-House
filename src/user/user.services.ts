import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";

// Interface testing
export const createBooksDataToDB = async (payload: IBooks): Promise<IBooks> => {
  // creating a new user
  const books = new Books(payload);
  await books.save();
  console.log(books);
  return books;
};

//! Task:1
export const getBooksFromDB = async (): Promise<IBooks[]> => {
  const Allbooks = await Books.find({});
  return Allbooks;
};

//! Task:2
export const getFantasyBooksFromDB = async (): Promise<IBooks[]> => {
  const Fantasybooks = await Books.find({ genre: "Fantasy" });
  return Fantasybooks;
};

// !Task 3:Find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
export const getScifiBooksFromDB = async (): Promise<IBooks[]> => {
  const Scifibooks = await Books.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books",
  });
  return Scifibooks;
};

// ! Task 4: Add a field named Featured where, books rating greater than 4.5 would be featured as "Best Seller" and rating greater than 4.0 would be featured as "popular"
export const getFeaturedBooksFromDB = async (): Promise<IBooks[]> => {
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
            default: "Best Books",
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
  const Updatedbooks = await Books.updateMany(
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
  return Updatedbooks;
};
