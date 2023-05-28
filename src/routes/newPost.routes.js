import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { NewPost } from "../controllers/newPostController.js";

const newPostRouter = Router();

newPostRouter.post('/newpost', authentication, NewPost)

export default newPostRouter;