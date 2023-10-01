import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./utils/db";
require("dotenv").config();
import http from "http";
import { initSocketServer } from "./socketServer";

const server = http.createServer(app);

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

// Create a Server
server.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
  connectDB();
});
