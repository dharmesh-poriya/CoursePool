import { NextFunction, Request, Response } from "express";

export const catchAsyncError =
  (theFunc: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(res, res, next)).catch(next);
  };
