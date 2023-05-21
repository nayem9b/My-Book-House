import express from "express";
import { getAllBooks } from "./user.controller";

const router = express.Router();

router.get("/", getAllBooks);

export default router;
