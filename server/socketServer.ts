import {Server as SocketIOServer} from "socket.io";
import http from "http";

export const initSocketServer = (server: http.Server) => {
    // Create a Socket Server
    const io = new SocketIOServer(server);

    io.on("connection", (socket) => {
        console.log("New Client Connected");
        
        // Listen for a new notification from the client
        socket.on("notification", (data) => {
            // Broadcast the notification to all the connected clients except the sender itself
            io.emit("newNotification", data);
        })

        socket.on("disconnect", () => {
            console.log("Client Disconnected");
        });
    }); 
};