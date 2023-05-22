import { NextFunction, Request, Response } from "express";
import {
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
  const Books = await getBooksFromDB();
  res.send(Books);
};

// Task:2
export const getFantasyBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await getFantasyBooksFromDB();
  res.send(Books);
};

// !Task 3:Find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
export const getScifiBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await getScifiBooksFromDB();
  res.send(Books);
};

// ! Task 4: Add a field named Featured where, books rating greater than 4.5 would be featured as "Best Seller" and rating greater than 4.0 would be featured as "popular"
export const getFeaturedBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await getFeaturedBooksFromDB();
  res.send(Books);
};

// !Task 5 : update books price to $Int which are published after 2020
export const updateBooksPriceToInt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await updatePriceToIntFromDB();
  res.send(Books);
};
