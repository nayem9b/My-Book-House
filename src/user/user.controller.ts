import { NextFunction, Request, Response } from "express";
import {
  // createBooksDataToDB,
  getBooksFromDB,
  getFantasyBooksFromDB,
  getFeaturedBooksFromDB,
  getScifiBooksFromDB,
  updatePriceToIntFromDB,
} from "./user.services";

// Task:1
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const AllBooks = await getBooksFromDB();
  res.send(AllBooks);
};

// Task:2
export const getFantasyBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const FantasyBooks = await getFantasyBooksFromDB();
  res.send(FantasyBooks);
};

// !Task 3:Find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
export const getScifiBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ScifiBooks = await getScifiBooksFromDB();
  res.send(ScifiBooks);
};

// ! Task 4: Add a field named Featured where, books rating greater than 4.5 would be featured as "Best Seller" and rating greater than 4.0 would be featured as "popular"
export const getFeaturedBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const FeaturedBooks = await getFeaturedBooksFromDB();
  res.send(FeaturedBooks);
};

// !Task 5 : update books price to $Int which are published after 2020
export const updateBooksPriceToInt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const UpdatedBooks = await updatePriceToIntFromDB();
  res.send(UpdatedBooks);
};

export const confirmation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("My App is working");
};
// export const createBooks = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const data = req.body;
//   const user = await createBooksDataToDB();

//   res.status(200).json({
//     status: "success",
//     data: user,
//   });
// };
