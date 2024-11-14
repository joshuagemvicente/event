import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/auth/register", authController.registerUserController);
router.post("/auth/login", authController.loginUserController);
router.post("/auth/login", authController.loginUserController);

export default router;
