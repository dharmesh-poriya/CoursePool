import { catchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import { Request, Response, NextFunction } from "express";
import OrderModel, { IOrder } from "../models/orderModel";
import CourseModel from "../models/course.model";
import userModel from "../models/user.model";
import path from "path";
import NotificationModel from "../models/notificationModel";
import sendMail from "../utils/sendMail";
import ejs from "ejs";
import { getAllOrdersService, newOrder } from "../services/order.service";

export const createOrder = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, payment_info } = req.req.body as IOrder;

      const user = await userModel.findById(req.req.user?._id);

      const courseExistInUser = user?.courses.some(
        (c: any) => c._id.toString() === courseId
      );

      if (courseExistInUser) {
        return next(
          new ErrorHandler("You have already purchased this course", 400)
        );
      }

      const course = await CourseModel.findById(courseId);
      if (!course) {
        return next(new ErrorHandler("Course not found", 404));
      }
      //   console.log("course", course);
      const data: any = {
        courseId: course?._id,
        userId: user?._id,
        payment_info,
      };
      //   console.log("data",data)
      const mailData = {
        order: {
          _id: course._id.toString().slice(0, 6),
          name: course.name,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      };

      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/order-confirmation.ejs"),
        { order: mailData }
      );

      try {
        if (user) {
          await sendMail({
            email: user.email,
            subject: "Order Confirmation",
            template: "order-confirmation.ejs",
            data: mailData,
          });
        }
      } catch (err: any) {
        return next(new ErrorHandler(err.message, 500));
      }

      user?.courses.push(course?._id);
      await user?.save();

      await NotificationModel.create({
        user: user?._id,
        title: "New Order",
        message: `You have new order for ${course?.name} course`,
      });

      if(course.purchased!==undefined) course.purchased += 1;

      await course.save();
      //   newOrder(data, res, next);
      const order = await OrderModel.create(data);
      res.status(200).json({
        success: true,
        order,
      });
    } catch (err: any) {
      next(new ErrorHandler(err.message, 500));
    }
  }
);

// get all orders -- only for Admin user
export const getAllOrders = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllOrdersService(res);
    } catch (err: any) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
);
