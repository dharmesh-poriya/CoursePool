require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import bodyParser from "body-parser";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";

// Body Parser middleware
app.use(express.json({ limit: "50mb" }));

// cookie Parser middleware
app.use(cookieParser());

// body Parser for json data
app.use(bodyParser.json());

// CORS => cross origin rsource sharing
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// routes
app.use(
  "/api/v1",
  userRouter,
  courseRouter,
  orderRouter,
  notificationRoute,
  analyticsRouter
);

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

app.use(ErrorMiddleware);
