const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.undypbz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client; // export client

/**
 *
 * Setup middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Import the routers
 */
const useUser = require("./router/user");
const useCatagory = require("./router/catagory");

/**
 *
 * Make the API Using routers
 */
app.use("/users", useUser);
app.use("/catagory", useCatagory);

// Base API for testing and checking the server is running
app.get("/", (req, res) => res.send("Book resell server is running 🚀"));

app.listen(port, () =>
  console.log(`Book Resell server is running on port ${port} 🚀`)
);
