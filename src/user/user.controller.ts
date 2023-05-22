import { NextFunction, Request, Response } from "express";
import {
  getBooksFromDB,
  getFantasyBooksFromDB,
  getScifiBooksFromDB,
  updatePriceToIntFromDB,
} from "./user.services";

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await getBooksFromDB();
  // res.status(200).json({ status: " success", data: Books });
  res.send(Books);
};
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

// !Task 5 : update books price to $Int which are published after 2020
export const updateBooksPriceToInt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Books = await updatePriceToIntFromDB();
  res.send(Books);
};
