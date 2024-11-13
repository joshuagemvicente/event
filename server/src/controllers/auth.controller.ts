import { Request, Response } from "express";
import { NotFoundError } from "../errors/notFound.error";
import { registerUser } from "../services/auth.services";
import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

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
