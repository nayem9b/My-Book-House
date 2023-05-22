import mongoose from "mongoose";
import { IBooks } from "./book.interface";
import Books from "./book.model";

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

// export const createBooksDataToDB = async () => {
//   // creating a new user
//   const books = new Books([
//     {
//       title: "Book 1",
//       author: ["Author 1", "Author 2"],
//       genre: "Mystery",
//       publicationYear: 2020,
//       publisher: {
//         name: "Publisher A",
//         location: "City A",
//       },
//       reviews: [
//         {
//           user: "User 1",
//           comment: "Great book!",
//         },
//         {
//           user: "User 2",
//           comment: "Interesting plot",
//         },
//       ],
//       rating: 4.5,
//       price: "90",
//     },
//     {
//       title: "Book 2",
//       author: ["Author 3"],
//       genre: "Sci-Fi",
//       publicationYear: 2018,
//       publisher: {
//         name: "Roli Books",
//         location: "City B",
//       },
//       reviews: [
//         {
//           user: "User 3",
//           comment: "Mind-blowing",
//         },
//         {
//           user: "User 4",
//           comment: "Couldn't put it down",
//         },
//       ],
//       rating: 4.8,
//       price: "120",
//     },
//     {
//       title: "Book 3",
//       author: ["Author 4"],
//       genre: "Fantasy",
//       publicationYear: 2022,
//       publisher: {
//         name: "Publisher C",
//         location: "City C",
//       },
//       reviews: [
//         {
//           user: "User 5",
//           comment: "Captivating world-building",
//         },
//         {
//           user: "User 6",
//           comment: "A must-read for fantasy lovers",
//         },
//       ],
//       rating: 4.2,
//       price: 80,
//     },
//     {
//       title: "Book 4",
//       author: ["Author 5", "Author 6"],
//       genre: "Thriller",
//       publicationYear: 2017,
//       publisher: {
//         name: "Publisher D",
//         location: "City D",
//       },
//       reviews: [
//         {
//           user: "User 7",
//           comment: "Kept me on the edge of my seat",
//         },
//         {
//           user: "User 8",
//           comment: "Twists and turns at every chapter",
//         },
//       ],
//       rating: 4.6,
//       price: "95",
//     },
//     {
//       title: "Book 5",
//       author: ["Author 7"],
//       genre: "Historical Fiction",
//       publicationYear: 2021,
//       publisher: {
//         name: "Publisher E",
//         location: "City E",
//       },
//       reviews: [
//         {
//           user: "User 9",
//           comment: "Richly detailed and immersive",
//         },
//         {
//           user: "User 10",
//           comment: "Transported me to a different era",
//         },
//       ],
//       rating: 3.3,
//       price: 110,
//     },
//     {
//       title: "Book 6",
//       author: ["Author 8"],
//       genre: "Romance",
//       publicationYear: 2019,
//       publisher: {
//         name: "Publisher F",
//         location: "City F",
//       },
//       reviews: [
//         {
//           user: "User 11",
//           comment: "Heartwarming love story",
//         },
//         {
//           user: "User 12",
//           comment: "Couldn't put it down",
//         },
//       ],
//       rating: 4.1,
//       price: "85",
//     },
//     {
//       title: "Book 7",
//       author: ["Author 9", "Author 10"],
//       genre: "Biography",
//       publicationYear: 2023,
//       publisher: {
//         name: "Publisher G",
//         location: "City G",
//       },
//       reviews: [
//         {
//           user: "User 13",
//           comment: "Inspiring life journey",
//         },
//         {
//           user: "User 14",
//           comment: "Well-researched and engaging",
//         },
//       ],
//       rating: 4.7,
//       price: 105,
//     },
//     {
//       title: "Book 8",
//       author: ["Author 11"],
//       genre: "Horror",
//       publicationYear: 2022,
//       publisher: {
//         name: "Publisher H",
//         location: "City H",
//       },
//       reviews: [
//         {
//           user: "User 15",
//           comment: "Chilling and suspenseful",
//         },
//         {
//           user: "User 16",
//           comment: "Kept me up at night",
//         },
//       ],
//       rating: 4.4,
//       price: "95",
//     },
//     {
//       title: "Book 9",
//       author: ["Author 12", "Author 13"],
//       genre: "Science",
//       publicationYear: 2020,
//       publisher: {
//         name: "Publisher I",
//         location: "City I",
//       },
//       reviews: [
//         {
//           user: "User 17",
//           comment: "Fascinating exploration of scientific concepts",
//         },
//         {
//           user: "User 18",
//           comment: "Accessible and informative",
//         },
//       ],
//       rating: 4.9,
//       price: "115",
//     },
//     {
//       title: "Book 10",
//       author: ["Author 14"],
//       genre: "Drama",
//       publicationYear: 2021,
//       publisher: {
//         name: "Publisher J",
//         location: "City J",
//       },
//       reviews: [
//         {
//           user: "User 19",
//           comment: "Emotionally gripping story",
//         },
//         {
//           user: "User 20",
//           comment: "Powerful and thought-provoking",
//         },
//       ],
//       rating: 3.9,
//       price: 75,
//     },
//   ]);
//   await books.save();
//   console.log(books);
//   // console.log(user.fullName());

//   return books;
// };
