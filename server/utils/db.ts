import mongoose from "mongoose";
require("dotenv").config();

const dbURL: string = process.env.DB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL).then((data: any) => {
      console.log(
        `MongoDB Database connected Succesfully!! with ${data.connection.host}`
      );
    });
  } catch (err: any) {
    console.log(err.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
