import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

import routes from "./user/user.route";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

export default app;
