import { User } from "../models/user.models";
import { IUser } from "../interfaces/user.interface";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";

export const registerUser = async (
  userData: Partial<IUser>,
): Promise<IUser> => {
  const hashedPassword = await hash(userData.password as string, 12);
  const user = new User({ ...userData, password: hashedPassword });
  return user.save();
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY as string, {
    expiresIn: "24h",
  });
  return { user, token };
};

export const signupAdmin = async (
  adminData: Partial<IUser>,
): Promise<IUser> => {
  const hashedPassword = await hash(adminData.password as string, 12);
  const admin = new User({
    ...adminData,
    password: hashedPassword,
    canHostEvents: true,
    role: "admin",
  });
  return admin.save();
};

export const loginAdmin = async (email: string, password: string) => {
  const admin = await User.findOne({
    email: "joshuagemvicente6@gmail.com",
    role: "admin",
  });
  if (!admin) {
    throw new Error("Admin not found");
  }
  const isAdminPasswordValid = await compare(password, admin.password);
  if (!isAdminPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_KEY as string, {
    expiresIn: "24h",
  });

  return { admin, token };
};
