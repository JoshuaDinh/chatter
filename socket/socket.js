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

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", socketUsers);
  });
  socket.on("disconnect", () => {
    console.log("a user has been removed");
    removeUser(socket.id);
    io.emit("getUsers", socketUsers);
  });
});
