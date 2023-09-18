import { NextFunction, Response } from "express";
import CourseModel from "../models/course.model";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";

// create course
export const createCourse = catchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    try {
      const course = await CourseModel.create(data.req.body);
      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);
