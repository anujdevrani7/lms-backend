import { Request, Response, NextFunction } from "express";
import { ZodError, ZodSchema } from "zod";


export const validationSchema = <T>(schema: ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData=schema.parse(req.body);
      req.body=parsedData
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(400).json({ error: "Invalid body data", details: errorMessages });
        return
      }
      next(error); // Pass any other errors to the default error handler
    }
  };
};



export function validateParams(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedParams = schema.parse(req.params);
      req.params = parsedParams;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }));
        res.status(400).json({ error: 'Invalid parameters', details: errorMessages });
        return
      } 
      next(error)
    }
  };
}
