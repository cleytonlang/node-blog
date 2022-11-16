import { NextFunction, Request, Response } from "express";
var cors = require("cors");

export const corsAdd = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  cors(corsOptions);
  return next();
};

// export const corsAdd = (
//   err: Error,
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   response.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   // response.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// };
