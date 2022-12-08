import express from "express";
import "express-async-errors";
import { routes } from "./routes";
import { errors } from "./config/errors";
require('dotenv').config()

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors);

app.listen(process.env.PORT, () => console.log("Server is running"));
