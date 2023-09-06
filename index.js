const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

/**
 *
 * Setup middleware
 */
app.use(cors());
app.use(express.json());

// Base API for testing and checking the server is running
app.get("/", (req, res) => res.send("Book resell server is running 🚀"));

app.listen(port, () =>
  console.log(`Book Resell server is running on port ${port} 🚀`)
);
