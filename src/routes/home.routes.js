import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { Home } from "../controllers/homeController.js";

const homeRouter = Router();

homeRouter.get('/home', authentication, Home)

export default homeRouter;