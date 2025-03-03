import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { Constants } from "./constants";
import errorHandler from "./middlewares/errorHandler.middleware";
import testRouter from "./routers/test.router";
import { userRouter } from "./routers/userRouter";

dotenv.config();
export const app: Express = express();

app.use(express.json({ limit: "16mb" }));
app.use(cookieParser());
// app.use(express.static(path.resolve("./public")));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("server is working ");
});

app.use(`${Constants.ApiVersion}/test`, testRouter);

app.use(`${Constants.ApiVersion}/users`,userRouter.signupRoutes)


app.use(errorHandler);




