import express, { Application } from "express";
import cors from "cors";
import routes from "./user/user.route";
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/user", routes);

export default app;
