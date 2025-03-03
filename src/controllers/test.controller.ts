import { asyncHandler } from "../middlewares/asyncHandler.middleware";

import { apiResponse } from "../utils/apiResponse";
import customErrorHandler from "../utils/customErrorHandler";

export const testController = asyncHandler(async (req, res, next) => {

  // custom error bhene ke liye 
  // return(
  //   next(new customErrorHandler(400,"this is custom error "))
  // )

  
  


  return res.status(200).json( //for response
    new apiResponse(200, {
      message: "ok report ",
    })
  );
});
