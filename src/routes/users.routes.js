import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { Users } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get('/followers', authentication, Users)

export default usersRouter;