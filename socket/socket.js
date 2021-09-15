const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let socketUsers = [];

// Creates array of all active socket users
const addUser = (userId, socketId) => {
  !socketUsers.some((user) => user.userId === userId) &&
    socketUsers.push({ userId, socketId });
};
const removeUser = (socketId) => {
  socketUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return socketUsers.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("a user connected");
  // Retrieve userId & socketId - push into array on connection
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", socketUsers);
  });

  // Send and recieve messages
  socket.on("sendMessage", ({ senderId, conversationId, text, recieverId }) => {
    const user = getUser(recieverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      conversationId,
      text,
    });
  });
  // Remove users from array on disconnection
  socket.on("disconnect", () => {
    console.log("a user has been removed");
    removeUser(socket.id);
    io.emit("getUsers", socketUsers);
  });
});
