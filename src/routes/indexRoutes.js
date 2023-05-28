import { Router } from "express";
import registerRouter from "./register.routes.js";
import loginRouter from "./login.routes.js";
import myProfileRouter from "./myProfile.routes.js";
import newPostRouter from "./newPost.routes.js";

const routes = Router();
routes.use(registerRouter, loginRouter, myProfileRouter, newPostRouter)

export default routes;