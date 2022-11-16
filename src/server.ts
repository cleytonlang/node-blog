import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { errors } from "./errors";

const app = express();
app.use(express.json());

app.use(routes);

app.use(errors);

app.listen(3000, () => console.log("Server is running"));
