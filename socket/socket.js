const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let socketUsers = [];

const addUser = (userId, socketId) => {
  !socketUsers.some((user) => user.userId === userId) &&
    socketUsers.push({ userId, socketId });
};

io.on("connection", (socket) => {
  console.log("a user connected");
  // io.to(socketId)("welcome", "hello this is socket");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    // io.emit("getUsers", socketUsers);
    console.log(socketUsers);
  });
});
