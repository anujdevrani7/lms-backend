import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { userSingupType } from "../schema/userSchema";
import { apiResponse } from "../utils/apiResponse";

export const signUp = asyncHandler(async (req, res, next) => {
  const {email,password}:userSingupType=req.body

    
  return res.status(200).json(
    new apiResponse(200, {
      body: req.body,
    })
  );

});
export const signIn = asyncHandler(async (req, res, next) => {
  // write code
});
