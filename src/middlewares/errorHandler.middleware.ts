import { ControllerType } from './../types/index';
import { NextFunction, Request, Response } from "express";
import customErrorHandler from "../utils/customErrorHandler";


const errorHandler = (
  err: customErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  if (err.name === "CastError") err.message = "Invalid ID";

 res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler