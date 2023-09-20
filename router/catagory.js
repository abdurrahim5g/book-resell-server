const express = require("express");
const router = express.Router();
const client = require("../index");
const { ObjectId } = require("mongodb");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const catagoryCollection = db.collection("catagory");

    router.get("/", async (req, res) => {
      const query = req.query;
      const result = await catagoryCollection.find(query).toArray();
      res.send(result);
    });

    router.post("/", async (req, res) => {
      const catagoryDoc = req.body;
      const result = await catagoryCollection.insertOne(catagoryDoc);
      res.send(result);
    });

    router.delete("/", async (req, res) => {
      const id = req.query?.id;
      const query = { _id: new ObjectId(id) };
      const result = await catagoryCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });
  } finally {
    //
  }
};
run().catch(console.dir);
module.exports = router;
