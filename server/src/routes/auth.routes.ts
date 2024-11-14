import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/auth/register", authController.registerUserController);
router.post("/auth/login", authController.loginUserController);
router.post("/auth/admin/signup", authController.signupAdminController);
router.post("/auth/admin/login", authController.loginAdminController);

export default router;
