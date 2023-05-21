import { NextFunction, Request, Response } from "express";
import { getBooksFromDB } from "./user.services";

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBooksFromDB();
  res.status(200).json({ status: " success", data: books });
};
