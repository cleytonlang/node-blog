import express from "express";
import "express-async-errors";
import { routes } from "./routes";
import { errors } from "./config/errors";
import { corsAdd } from "./config/cors";

const app = express();

app.use(corsAdd);

app.use(express.json());

app.use(routes);

app.use(errors);

app.listen(3000, () => console.log("Server is running"));
