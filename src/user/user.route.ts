import express from "express";
import {
  getAllBooks,
  getFantasyBooks,
  getFeaturedBooks,
  getScifiBooks,
  updateBooksPriceToInt,
} from "./user.controller";

const router = express.Router();

router.get("/allbooks", getAllBooks);
router.get("/fantasy", getFantasyBooks);
router.get("/scifi", getScifiBooks);
router.get("/featured", getFeaturedBooks);
router.patch("/updatePrice", updateBooksPriceToInt);
router.get("/updatePrice", updateBooksPriceToInt);
export default router;
