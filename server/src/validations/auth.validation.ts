import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const adminSignupSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string(),
  lastName: Joi.string().required(),
  email: Joi.string().valid("joshuagemvicente6@gmail.com").required(),
  password: Joi.string().required(),
  phoneNumber: Joi.string().valid("09214982522").required(),
});

export const adminLoginSchema = Joi.object({
  email: Joi.string().valid("joshuagemvicente6@gmail.com").required(),
  password: Joi.string().required(),
});
