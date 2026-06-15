import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { randomUUID } from "crypto";

dotenv.config();

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 5000;

const waitingQueue = [];
const activePairs = new Map();

// ---------------- MATCH USERS ----------------

function matchUsers() {
  while (waitingQueue.length >= 2) {
    const user1 = waitingQueue.shift();
    const user2 = waitingQueue.shift();

    const roomId = randomUUID();

    activePairs.set(user1, user2);
    activePairs.set(user2, user1);

    io.to(user1).emit("matched", { roomId });
    io.to(user2).emit("matched", { roomId });

    console.log("Matched:", user1, user2);
  }
}

// ---------------- SOCKET ----------------

io.on("connection", (socket) => {

  console.log("Connected:", socket.id);

  // START CHAT

  socket.on("start", () => {

    if (!waitingQueue.includes(socket.id)) {
      waitingQueue.push(socket.id);
    }

    socket.emit("waiting");

    matchUsers();

  });

  // NEXT

  socket.on("next", () => {

    handleLeave(socket.id);

    if (!waitingQueue.includes(socket.id)) {
      waitingQueue.push(socket.id);
    }

    socket.emit("waiting");

    matchUsers();

  });

  // DISCONNECT

  socket.on("disconnect", () => {

    handleLeave(socket.id);

  });

  // ---------------- LEAVE ----------------

  function handleLeave(id) {

    // queue se hatao

    const index = waitingQueue.indexOf(id);

    if (index !== -1) {
      waitingQueue.splice(index, 1);
    }

    // partner nikalo

    const partner = activePairs.get(id);

    if (partner) {

      io.to(partner).emit("partner_left");

      activePairs.delete(id);
      activePairs.delete(partner);

    }

  }

});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});