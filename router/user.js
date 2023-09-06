const express = require("express");
const router = express.Router();
const client = require("../index");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const userCollection = db.collection("users");

    router.get("/", (req, res) => {
      res.send("All users");
    });
  } finally {
    // Finally
  }
};
run().catch(console.dir);

module.exports = router;
