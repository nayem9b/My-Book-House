import express from "express";
import {
  confirmation,
  createBooks,
  getAllBooks,
  getFantasyBooks,
  getFeaturedBooks,
  getScifiBooks,
  updateBooksPriceToInt,
} from "./book.controller";

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
router.post("/updatePrice", updateBooksPriceToInt);

// Interface Confirmation test
router.post("/create-data", createBooks);

router.get("/", confirmation);

export default router;
