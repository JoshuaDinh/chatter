const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require("cors");
// route imports
const conversationRoute = require("./routes/api/conversations");
const userRoute = require("./routes/api/user");
const authRoute = require("./routes/api/auth");
const messageRoute = require("./routes/api/messages");

// initialize app config
const app = express();
connectDB();
const port = process.env.PORT || 3000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/api/conversations", conversationRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

// listen
app.listen(port, console.log("we are running on " + port));
