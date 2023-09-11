const express = require("express");
const router = express.Router();
const client = require("../index");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const catagoryCollection = db.collection("catagory");

    router.get("/", async (req, res) => {
      res.send("All Catagory");
    });

    router.post("/", async (req, res) => {
      const catagoryDoc = req.body;
      const result = await catagoryCollection.insertOne(catagoryDoc);
      res.send(result);
    });
  } finally {
    //
  }
};
run().catch(console.dir);
module.exports = router;
