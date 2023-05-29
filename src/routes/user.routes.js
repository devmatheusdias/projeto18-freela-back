import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { User, insertFollower } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/user/:id', authentication, User);

userRouter.post('/user/:id', authentication, insertFollower);

export default userRouter;