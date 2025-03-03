import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongodburi = process.env.MONGO_DB_URI!;
export const connnectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to the database:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });
    await mongoose.connect(mongodburi, {
      maxPoolSize: 10,
    });
  } catch (error) {
    console.log("error in connecting the database ", error);
    process.exit(1);
  }
};
