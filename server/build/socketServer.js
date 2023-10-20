"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocketServer = void 0;
const socket_io_1 = require("socket.io");
const initSocketServer = (server) => {
    // Create a Socket Server
    const io = new socket_io_1.Server(server);
    io.on("connection", (socket) => {
        console.log("New Client Connected");
        // Listen for a new notification from the client
        socket.on("notification", (data) => {
            // Broadcast the notification to all the connected clients except the sender itself
            io.emit("newNotification", data);
        });
        socket.on("disconnect", () => {
            console.log("Client Disconnected");
        });
    });
};
exports.initSocketServer = initSocketServer;
