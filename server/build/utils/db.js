"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const dbURL = process.env.DB_URL || "";
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(dbURL).then((data) => {
            console.log(`MongoDB Database connected Succesfully!! with ${data.connection.host}`);
        });
    }
    catch (err) {
        console.log(err.message);
        setTimeout(connectDB, 5000);
    }
};
exports.default = connectDB;
