import express from "express";
import {
  getAllBooks,
  getFantasyBooks,
  getFeaturedBooks,
  getScifiBooks,
  updateBooksPriceToInt,
} from "./user.controller";

const router = express.Router();

// task:1
router.get("/allbooks", getAllBooks);

// task:2
router.get("/fantasy", getFantasyBooks);

// task:3
router.get("/scifi", getScifiBooks);

// task:4
router.get("/featured", getFeaturedBooks);

// task:5
router.patch("/updatePrice", updateBooksPriceToInt);
router.get("/updatePrice", updateBooksPriceToInt);

export default router;
