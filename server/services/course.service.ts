import { NextFunction, Response } from "express";
import CourseModel from "../models/course.model";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import { redis } from "../utils/redis";

// create course
export const createCourse = catchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    try {
      const course = await CourseModel.create(data.req.body);

      const courses = await CourseModel.find().select(
        "-courseData.videoUrl -courseData.videoSection -courseData.videoLength -courseData.videoPlayer -courseData.links -courseData.suggestion -courseData.questions"
      );
      await redis.set("allCourses", JSON.stringify(courses));

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// get All courses
export const getAllCoursesService = async (res: Response) => {
  const courses = await CourseModel.find().sort({ createdAt: -1 });
  res.status(201).json({
    success: true,
    courses,
  });
};
