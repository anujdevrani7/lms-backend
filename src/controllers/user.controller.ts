import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { apiResponse } from "../utils/apiResponse";

export const signUp = asyncHandler(async (req, res, next) => {
    
  return res.status(200).json(
    new apiResponse(200, {
      body: req.body,
    })
  );

  // write code
});
export const signIn = asyncHandler(async (req, res, next) => {
  // write code
});
