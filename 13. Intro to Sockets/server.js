const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });

    // socket.on("from_client", () => {
    //     console.log("Received event from client");
    // });

    // setInterval(() => {
    //     socket.emit("from_server");
    // }, 3000);

    socket.on("new_msg", (data) => {
        // will emit message to all connections
        io.emit("msg_rcvd", data);
        // will emit message to itself
        // socket.emit("msg_rcvd", data);
        // will emit message to all connection except itself
        // socket.broadcast.emit("msg_rcvd", data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});