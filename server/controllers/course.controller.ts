import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { createCourse } from "../services/course.service";
import CourseModel from "../models/course.model";
import { redis } from "../utils/redis";
import mongoose from "mongoose";
import path from "path";
import sendMail from "../utils/sendMail";
import ejs from "ejs";
import NotificationModel from "../models/notificationModel";

// upload course
export const uploadCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.req.body;
      const thumbnail = data.thumbnail;
      if (thumbnail) {
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });
        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      createCourse(data, res, next);
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// update course
export const editCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.req.body;
      const thumbnail = data.thumbnail;
      if (thumbnail) {
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
          folder: "courses",
        });

        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const courseId = req.req.params.id;
      const course = await CourseModel.findByIdAndUpdate(
        courseId,
        {
          $set: data,
        },
        {
          new: true,
        }
      );

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// get single course without purchased
export const getSingleCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.req.params.id;
      const isCacheExist = await redis.get(courseId);
      if (isCacheExist) {
        const course = JSON.parse(isCacheExist);
        res.status(200).json({
          success: true,
          course,
        });
      } else {
        const course = await CourseModel.findById(courseId).select(
          "-courseData.videoUrl -courseData.videoSection -courseData.videoLength -courseData.videoPlayer -courseData.links -courseData.suggestion -courseData.questions"
        );
        await redis.set(courseId, JSON.stringify(course));
        res.status(200).json({
          success: true,
          course,
        });
      }
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// get all course without purchased
export const getAllCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isCacheExist = await redis.get("allCourses");
      if (isCacheExist) {
        const courses = JSON.parse(isCacheExist);
        res.status(200).json({
          success: true,
          courses,
        });
      } else {
        const courses = await CourseModel.find().select(
          "-courseData.videoUrl -courseData.videoSection -courseData.videoLength -courseData.videoPlayer -courseData.links -courseData.suggestion -courseData.questions"
        );
        await redis.set("allCourses", JSON.stringify(courses));
        res.status(200).json({
          success: true,
          courses,
        });
      }
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// get course by user
export const getCourseByUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCourseList = req.req.user?.courses;
      const courseId = req.req.params.id;
      const courseExists = userCourseList?.find(
        (course: any) => course._id.toString() === courseId
      );

      if (!courseExists) {
        return next(
          new ErrorHandler("You are not eligible to access this course", 404)
        );
      }

      const course = await CourseModel.findById(courseId);
      const content = course?.courseData;

      res.status(200).json({
        success: true,
        content,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// add question to course
interface IAddQuestionData {
  question: string;
  courseId: string;
  contentId: string;
}

export const addQuestion = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { question, courseId, contentId }: IAddQuestionData = req.req.body;
      const course = await CourseModel.findById(courseId);

      if (!mongoose.Types.ObjectId.isValid(contentId)) {
        return next(new ErrorHandler("Invalid Content Id", 400));
      }

      const courseContent = course?.courseData?.find(
        (item) => item._id.toString() === contentId
      );
      if (!courseContent) {
        return next(new ErrorHandler("Invalid Content Id", 400));
      }

      // create a new question object
      const newQuestion: any = {
        user: req.req.user,
        question,
        questionReplies: [],
      };

      courseContent.questions?.push(newQuestion);

      await NotificationModel.create({
        user: req.req.user?._id,
        title: "New Quetion Received",
        message: `You have a new Quetion in ${courseContent.title} course`,
      });

      await course?.save();

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// add answer in course question
interface IAddAnswerData {
  answer: string;
  courseId: string;
  contentId: string;
  questionId: string;
}

export const addAnswer = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { answer, courseId, contentId, questionId }: IAddAnswerData =
        req.req.body;

      if (
        !mongoose.Types.ObjectId.isValid(courseId) ||
        !mongoose.Types.ObjectId.isValid(contentId)
      ) {
        return next(new ErrorHandler("Invalid Content Id", 400));
      }

      const course = await CourseModel.findById(courseId);

      const courseContent = course?.courseData?.find(
        (item) => item._id.toString() === contentId
      );
      if (!courseContent) {
        return next(new ErrorHandler("Invalid Content Id", 400));
      }

      const question = courseContent.questions?.find(
        (item: any) => item._id.toString() === questionId
      );
      if (!question) {
        return next(new ErrorHandler("Invalid Question Id", 400));
      }

      const newAnswer: any = {
        user: req.req.user,
        answer,
      };

      question.questionReplies?.push(newAnswer);

      await course?.save();

      if (req.req.user?._id === question.user._id) {
        // console.log("SAME USER, CREATE NOTIFICATION");
        await NotificationModel.create({
          user: req.req.user?._id,
          title: "New Quetion Reply Received",
          message: `you have a new quetions reply in ${courseContent.title}`,
        });
      } else {
        // send mail
        const data = {
          name: question.user.name,
          title: courseContent.title,
        };

        const html = await ejs.renderFile(
          path.join(__dirname, "../mails/question-reply.ejs"),
          data
        );

        try {
          await sendMail({
            email: question.user.email,
            subject: "Question Reply",
            template: "question-reply.ejs",
            data,
          });
        } catch (err: any) {
          return next(new ErrorHandler(err.message, 500));
        }
      }

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// add review
interface IAddReviewData {
  review: string;
  rating: number;
  userId: string;
}

export const addReview = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userCourseList = req.req.user?.courses;
      const courseId = req.req.params.id;

      // validating the user that it contains the courseId or not
      const courseExists = userCourseList?.find(
        (course: any) => course._id.toString() === courseId
      );
      if (!courseExists) {
        return next(
          new ErrorHandler("You are not eligible to access this course", 404)
        );
      }

      const course = await CourseModel.findById(courseId);
      const { review, rating }: IAddReviewData = req.req.body;

      const reviewData: any = {
        user: req.req.user,
        rating,
        comment: review,
      };

      course?.reviews?.push(reviewData);

      let avgRating = 0;
      course?.reviews?.forEach((item: any) => {
        avgRating += item.rating;
      });

      if (course) {
        course.ratings = avgRating / course.reviews.length;
      }
      await course?.save();

      const notification = {
        title: "New Review Received",
        message: `${req.req.user?.name} has given a review in ${course?.name} course`,
      };

      // send notification

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// add reply in review
interface IAddReplyData {
  comment: string;
  courseId: string;
  reviewId: string;
}

export const addReply = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { comment, courseId, reviewId }: IAddReplyData = req.req.body;

      const course = await CourseModel.findById(courseId);

      if (!course) {
        return next(new ErrorHandler("Course not found", 400));
      }

      const review = course?.reviews?.find(
        (item: any) => item._id.toString() === reviewId
      );
      if (!review) {
        return next(new ErrorHandler("Review not found", 400));
      }

      const replyData: any = {
        user: req.req.user,
        comment,
      };

      if (!review.commentReplies) {
        review.commentReplies = [];
      }
      review.commentReplies?.push(replyData);

      await course?.save();

      res.status(201).json({
        success: true,
        course,
      });
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);
