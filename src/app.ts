import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1/user");

export default app;
