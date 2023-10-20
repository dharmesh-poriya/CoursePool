"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCoursesService = exports.createCourse = void 0;
const course_model_1 = __importDefault(require("../models/course.model"));
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const redis_1 = require("../utils/redis");
// create course
exports.createCourse = (0, catchAsyncErrors_1.catchAsyncError)(async (data, res, next) => {
    try {
        const course = await course_model_1.default.create(data.req.body);
        const courses = await course_model_1.default.find().select("-courseData.videoUrl -courseData.videoSection -courseData.videoLength -courseData.videoPlayer -courseData.links -courseData.suggestion -courseData.questions");
        await redis_1.redis.set("allCourses", JSON.stringify(courses));
        res.status(201).json({
            success: true,
            course,
        });
    }
    catch (err) {
        return next(new ErrorHandler_1.default(err.message, 500));
    }
});
// get All courses
const getAllCoursesService = async (res) => {
    const courses = await course_model_1.default.find().sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        courses,
    });
};
exports.getAllCoursesService = getAllCoursesService;
