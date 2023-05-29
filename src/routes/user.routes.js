import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { User } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/user/:id', authentication, User)

export default userRouter;