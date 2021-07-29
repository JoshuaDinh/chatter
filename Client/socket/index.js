const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

// Send & recieve messages from socket server
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

socket.on("sendMessage", ({ senderId, recieverId, message }) => {
  const user = getUser(recieverId);
  io.to(user.socketId).emit("getMessage", {
    senderId,
    message,
  });
});

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("a user connected");
  //   Take userId and socketId from user - client side
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
