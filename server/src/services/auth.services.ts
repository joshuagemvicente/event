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

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "24h",
  });
  return { user, token };
};
