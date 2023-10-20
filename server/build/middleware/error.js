"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error !";
    // wrong MongoDb is error
    if (err.name === "CastError") {
        const messgae = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler_1.default(messgae, 400);
    }
    // Duplicate key error
    if (err.code === 11000) {
        const messgae = `Duplictae ${Object.keys(err.keyValue)} entered.`;
        err = new ErrorHandler_1.default(messgae, 400);
    }
    // wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const messgae = `Json web token is invalid, try again`;
        err = new ErrorHandler_1.default(messgae, 400);
    }
    // JWT expired error
    if (err.name === "TokenExpiredError") {
        const messgae = `Json web token is expired, try again`;
        err = new ErrorHandler_1.default(messgae, 400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
