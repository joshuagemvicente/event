import { Request, Response } from "express";
import { NotFoundError } from "../errors/notFound.error";
import {
  registerUser,
  loginUser,
  signupAdmin,
  loginAdmin,
} from "../services/auth.services";
import {
  registerSchema,
  loginSchema,
  adminSignupSchema,
  adminLoginSchema,
} from "../validations/auth.validation";

export const registerUserController = async (req: Request, res: Response) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ id: user._id, token });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const signupAdminController = async (req: Request, res: Response) => {
  const { error } = adminSignupSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  try {
    const admin = await signupAdmin(req.body);
    res.status(201).json(admin);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const loginAdminController = async (req: Request, res: Response) => {
  const { error } = adminLoginSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { email, password } = req.body;
    const { admin, token } = await loginAdmin(email, password);
    res.status(200).json({ id: admin._id, token });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
