import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { uploadCourse } from "../controllers/course.controller";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

export default courseRouter;
