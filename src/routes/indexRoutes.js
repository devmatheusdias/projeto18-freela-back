import { Router } from "express";
import registerRouter from "./register.routes.js";
import loginRouter from "./login.routes.js";
import newPostRouter from "./newPost.routes.js";
import homeRouter from "./home.routes.js";
import followersRouter from "./followers.routes.js";
import userRouter from "./user.routes.js";

const routes = Router();
routes.use(registerRouter, loginRouter, homeRouter, newPostRouter, followersRouter, userRouter)

export default routes;