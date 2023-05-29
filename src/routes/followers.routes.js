import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { Followers } from "../controllers/followersController.js";

const followersRouter = Router();

followersRouter.get('/followers', authentication, Followers)

export default followersRouter;