import express from "express";
import {
  getAllBooks,
  getFantasyBooks,
  getScifiBooks,
  updateBooksPriceToInt,
} from "./user.controller";

const router = express.Router();

router.get("/allbooks", getAllBooks);
router.get("/fantasy", getFantasyBooks);
router.get("/scifi", getScifiBooks);

router.post("/updatePrice", updateBooksPriceToInt);
router.get("/updatePrice", updateBooksPriceToInt);
export default router;
