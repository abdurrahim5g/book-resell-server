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

    router.post("/", async (req, res) => {
      const userDoc = req.body;
      const result = await userCollection.insertOne(userDoc);
      console.log(result);
      res.status(200).send(result);
    });
  } finally {
    // Finally
  }
};
run().catch(console.dir);

module.exports = router;
