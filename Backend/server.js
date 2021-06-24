const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require("cors");

// initialize app config
const app = express();
connectDB();
const port = process.env.PORT || 3000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/api/conversations", require("./routes/api/conversations"));
app.use("/api/user", require("./routes/api/user"));

// listen
app.listen(port, console.log("we are running on " + port));
