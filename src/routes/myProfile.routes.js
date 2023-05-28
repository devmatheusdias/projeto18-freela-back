import { Router } from "express";
import {authentication} from "../middlewares/authentication.middleware.js"
import { MyProfile } from "../controllers/myProfileController.js";

const myProfileRouter = Router();

myProfileRouter.get('/myprofile', authentication, MyProfile)

export default myProfileRouter;