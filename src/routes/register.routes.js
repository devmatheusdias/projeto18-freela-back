import { Router } from "express";
import { Register } from "../controllers/registerController.js";
import { registerValidator } from "../middlewares/registerValidator.js";

const registerRouter = Router();

registerRouter.post('/register', registerValidator, Register)

export default registerRouter;