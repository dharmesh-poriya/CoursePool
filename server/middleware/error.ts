import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error !";

  // wrong MongoDb is error
  if (err.name === "CastError") {
    const messgae = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(messgae, 400);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const messgae = `Duplictae ${Object.keys(err.keyValue)} entered.`;
    err = new ErrorHandler(messgae, 400);
  }

  // wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const messgae = `Json web token is invalid, try again`;
    err = new ErrorHandler(messgae, 400);
  }

  // JWT expired error
  if (err.name === "TokenExpiredError") {
    const messgae = `Json web token is expired, try again`;
    err = new ErrorHandler(messgae, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
