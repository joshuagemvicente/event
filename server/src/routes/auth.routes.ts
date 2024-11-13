import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/register", AuthController.registerUserController);

export default router;
