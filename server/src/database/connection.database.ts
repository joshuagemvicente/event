import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const mongoConnection = async () => {
  try {
    const mongoConnection = await mongoose.connect(
      process.env.MONGO_URI_DEV as string,
    );
    if (!mongoConnection) {
      console.log(onerror);
      console.log("MongoDB cant connect");
    } else {
      console.log("MongoDB connected");
    }
    // await mongoose.connect(process.env.MONGO_URI_DEV as string);
  } catch (error) {
    console.error(error);
  }
};
