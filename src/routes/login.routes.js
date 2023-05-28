import { Router } from "express";
import { Login } from "../controllers/loginController.js";
import { loginValidator } from "../middlewares/loginValidator.middlware.js";

const loginRouter = Router();

loginRouter.post('/login', loginValidator, Login)

export default loginRouter;