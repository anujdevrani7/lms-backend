import { Router } from "express";
import { signUpSchema } from "../../schema/userSchema";
import { signIn, signUp } from "../../controllers/user.controller";
import { validationSchema } from "../../utils/validation";
const router =Router();
router
    .post("/signup",validationSchema(signUpSchema),signUp)
    .post("/signin",signIn)


export default router