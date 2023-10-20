"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncError = void 0;
const catchAsyncError = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(res, res, next)).catch(next);
};
exports.catchAsyncError = catchAsyncError;
