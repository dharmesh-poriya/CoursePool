require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

// Body Parser middleware
app.use(express.json({ limit: "50mb" }));

// cookie Parser middleware
app.use(cookieParser());

// CORS => cross origin rsource sharing
app.use(cors({ origin: process.env.ORIGIN }));

// testing API's
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, Message: "API is Working Fine !!" });
});

// Unknown Route's
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found !`) as any;
  err.statusCode = 404;
  next(err);
});
