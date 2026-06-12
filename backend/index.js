require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev")); // Request logging

// Routes
app.use("/api", apiRoutes);

// For backwards compatibility with old frontend URLs (temporary until frontend is updated)
app.use("/", apiRoutes);

// Central Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
  mongoose.connect(uri).then(() => {
    console.log("DB connected successfully!");
  }).catch((err) => {
    console.error("DB connection error:", err);
  });
});
